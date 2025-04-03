from django.urls import path
from .views import PaymentInitiateView, PaymentCallbackView, PaymentLookupView

urlpatterns = [
    # Route to initiate a payment
    path('payment/initiate/', PaymentInitiateView.as_view(), name='payment_initiate'),

    # Route to handle callback from Khalti
    path('payment/callback/', PaymentCallbackView.as_view(), name='payment_callback'),

    # Route to verify payment status using Khalti lookup API
    path('payment/lookup/', PaymentLookupView.as_view(), name='payment_lookup'),
]