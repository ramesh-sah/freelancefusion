# chat/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FreelancerMessageViewSet, EmployerMessageViewSet, AdminMessageViewSet


router = DefaultRouter()
router.register(r'freelancer-messages', FreelancerMessageViewSet,basename='freelancer-message')
router.register(r'employer-messages', EmployerMessageViewSet,basename='employer-message')
router.register(r'admin-messages', AdminMessageViewSet,basename='admin-message')




urlpatterns = [
    path('', include(router.urls)),
]
