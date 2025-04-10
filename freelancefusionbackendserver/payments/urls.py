from django.urls import path
from .views import PaymentInitiateView, PaymentCallbackView, PaymentLookupView

urlpatterns = [
    path('payment/initiate/', PaymentInitiateView.as_view(), name='payment_initiate'),
    path('payment/callback/', PaymentCallbackView.as_view(), name='payment_callback'),
    path('payment/lookup/', PaymentLookupView.as_view(), name='payment_lookup'),
]
