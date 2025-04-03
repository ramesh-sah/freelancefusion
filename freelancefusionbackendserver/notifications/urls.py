# notifications/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FreelancerNotificationViewSet, EmployerNotificationViewSet, AdminNotificationViewSet

router = DefaultRouter()
router.register(r'freelancer-notifications', FreelancerNotificationViewSet,basename='freelancer-notification')
router.register(r'employer-notifications', EmployerNotificationViewSet,basename='employer-notification')
router.register(r'admin-notifications', AdminNotificationViewSet,basename='admin-notification')


urlpatterns = [
    path('', include(router.urls)),
]
