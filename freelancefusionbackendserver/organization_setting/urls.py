from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdminOrganizationSettingViewSet, AdminFreelanceOrganizationSettingViewSet

router = DefaultRouter()
router.register(r'admin-organizationsettings', AdminOrganizationSettingViewSet, basename='admin-organizationsetting')
router.register(r'admin-freelanceorganizationsettings', AdminFreelanceOrganizationSettingViewSet, basename='admin-freelanceorganizationsetting')

urlpatterns = [
    path('', include(router.urls)),
]
