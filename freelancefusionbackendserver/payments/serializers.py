# serializers.py
from rest_framework import serializers
from .models import Payment

class PaymentInitiateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['purchase_order_id', 'purchase_order_name', 'amount', 'customer_name', 'customer_email', 'customer_phone']

class PaymentStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['status', 'transaction_id', 'amount', 'pidx']