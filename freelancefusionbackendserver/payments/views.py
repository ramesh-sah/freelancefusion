import requests
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Payment
from .serializers import PaymentInitiateSerializer, PaymentStatusSerializer

class PaymentInitiateView(APIView):
    """
    Initiates a payment request to Khalti.
    """
    def post(self, request, *args, **kwargs):
        serializer = PaymentInitiateSerializer(data=request.data)
        if serializer.is_valid():
            payment = serializer.save(status="Initiated")
            khalti_url = "https://dev.khalti.com/api/v2/epayment/initiate/"
            headers = {
                "Authorization": "Key YOUR_TEST_SECRET_KEY",  # Use your test secret key here
                "Content-Type": "application/json",
            }
            payload = {
                "return_url": "http://yourdomain.com/khalti/payment/callback/",
                "website_url": "http://yourdomain.com/",
                "amount": payment.amount,
                "purchase_order_id": payment.purchase_order_id,
                "purchase_order_name": payment.purchase_order_name,
                "customer_info": {
                    "name": payment.customer_name,
                    "email": payment.customer_email,
                    "phone": payment.customer_phone,
                }
            }
            response = requests.post(khalti_url, json=payload, headers=headers)
            if response.status_code == 200:
                response_data = response.json()
                payment.pidx = response_data.get("pidx")
                payment.save()
                return Response({
                    "message": "Payment initiated successfully.",
                    "payment_url": response_data.get("payment_url"),
                    "pidx": payment.pidx,
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    "message": "Failed to initiate payment.",
                    "details": response.json(),
                }, status=response.status_code)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PaymentCallbackView(APIView):
    """
    Handles Khalti's callback after payment.
    """
    def get(self, request, *args, **kwargs):
        pidx = request.query_params.get("pidx")
        status_khalti = request.query_params.get("status")
        transaction_id = request.query_params.get("transaction_id")
        
        try:
            payment = Payment.objects.get(pidx=pidx)
        except Payment.DoesNotExist:
            return Response({"message": "Payment not found."}, status=status.HTTP_404_NOT_FOUND)
        
        if status_khalti == "Completed":
            payment.status = "Completed"
            payment.transaction_id = transaction_id
            payment.save()
            return Response({
                "message": "Payment successful.",
                "status": payment.status,
                "transaction_id": payment.transaction_id,
                "amount": payment.amount,
            }, status=status.HTTP_200_OK)
        elif status_khalti == "User canceled":
            payment.status = "User canceled"
            payment.save()
            return Response({"message": "Payment was canceled by the user."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            payment.status = status_khalti
            payment.save()
            return Response({"message": "Payment status updated."}, status=status.HTTP_200_OK)


class PaymentLookupView(APIView):
    """
    Verifies payment status using Khalti's lookup API.
    """
    def post(self, request, *args, **kwargs):
        pidx = request.data.get("pidx")
        try:
            payment = Payment.objects.get(pidx=pidx)
        except Payment.DoesNotExist:
            return Response({"message": "Payment not found."}, status=status.HTTP_404_NOT_FOUND)
        
        khalti_url = "https://dev.khalti.com/api/v2/epayment/lookup/"
        headers = {
            "Authorization": "Key YOUR_TEST_SECRET_KEY",  # Replace with your test secret key
            "Content-Type": "application/json",
        }
        payload = {"pidx": payment.pidx}
        response = requests.post(khalti_url, json=payload, headers=headers)
        if response.status_code == 200:
            response_data = response.json()
            payment.status = response_data.get("status")
            payment.transaction_id = response_data.get("transaction_id")
            payment.save()
            return Response({
                "message": "Payment status verified.",
                "status": payment.status,
                "transaction_id": payment.transaction_id,
                "amount": payment.amount,
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "message": "Failed to verify payment.",
                "details": response.json(),
            }, status=response.status_code)
