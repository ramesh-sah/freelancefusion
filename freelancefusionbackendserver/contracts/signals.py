# contracts/signals.py
import json
import logging
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from web3 import Web3
import datetime
from django.utils import timezone
from .models import Contract

logger = logging.getLogger(__name__)

@receiver(post_save, sender=Contract)
def deploy_contract(sender, instance, created, **kwargs):
    if created and not instance.contract_address:
        try:
            # Validate required fields
            if not instance.employer.eth_address or not instance.freelancer.eth_address:
                logger.error("Missing Ethereum addresses for Contract %s", instance.id)
                return

            # Convert dates to timezone-aware datetime objects
            start_date = datetime.datetime.combine(
                instance.start_date, 
                datetime.time.min,
                tzinfo=timezone.get_current_timezone()
            )
            end_date = datetime.datetime.combine(
                instance.end_date, 
                datetime.time.min,
                tzinfo=timezone.get_current_timezone()
            ) if instance.end_date else 0

            # Connect to blockchain
            w3 = Web3(Web3.HTTPProvider(settings.WEB3_PROVIDER_URI))
            if not w3.is_connected():
                logger.error("Could not connect to blockchain provider")
                return

            # Load contract artifacts
            with open(settings.CONTRACT_ARTIFACT_PATH) as f:
                contract_artifact = json.load(f)
            
            # Prepare contract deployment
            contract = w3.eth.contract(
                abi=contract_artifact['abi'],
                bytecode=contract_artifact['bytecode']
            )
            
            # Convert values for blockchain
            agreed_amount_wei = w3.to_wei(float(instance.agreed_amount), 'ether')
            start_date_unix = int(start_date.timestamp())
            end_date_unix = int(end_date.timestamp()) if instance.end_date else 0

            # Build transaction
            construct_txn = contract.constructor(
                instance.employer.eth_address,
                instance.freelancer.eth_address,
                agreed_amount_wei,
                start_date_unix,
                end_date_unix,
                instance.status,
                instance.payment_status
            ).build_transaction({
                'chainId': settings.WEB3_CHAIN_ID,
                'from': settings.DEPLOYER_ADDRESS,
                'nonce': w3.eth.get_transaction_count(settings.DEPLOYER_ADDRESS),
                'gasPrice': w3.eth.gas_price
            })

            # Estimate gas dynamically
            gas_estimate = contract.constructor(
                instance.employer.eth_address,
                instance.freelancer.eth_address,
                agreed_amount_wei,
                start_date_unix,
                end_date_unix,
                instance.status,
                instance.payment_status
            ).estimate_gas()
            construct_txn['gas'] = gas_estimate

            # Sign and send transaction
            signed_txn = w3.eth.account.sign_transaction(
                construct_txn, 
                settings.DEPLOYER_PRIVATE_KEY
            )
            tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
            tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

            # Update model
            instance.contract_address = tx_receipt.contractAddress
            instance.tx_hash = tx_hash.hex()
            instance.save(update_fields=['contract_address', 'tx_hash'])
            
            logger.info("Successfully deployed contract for Contract ID %s", instance.id)

        except Exception as e:
            logger.error("Contract deployment failed: %s", str(e), exc_info=True)