from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FreelancerContractViewSet, EmployerContractViewSet, AdminContractViewSet

router = DefaultRouter()
router.register('freelancer-contracts', FreelancerContractViewSet, basename='freelancer-contract')
router.register('employer-contracts', EmployerContractViewSet, basename='employer-contract')
router.register('admin-contracts', AdminContractViewSet, basename='admin-contract')


urlpatterns = [
    path('', include(router.urls)),
]