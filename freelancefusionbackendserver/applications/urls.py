from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FreelancerApplicationViewSet, EmployerApplicationViewSet, AdminApplicationViewSet

router = DefaultRouter()
router.register('freelancer-applications', FreelancerApplicationViewSet, basename='freelancer-application')
router.register('employer-applications', EmployerApplicationViewSet, basename='employer-application')
router.register('admin-applications', AdminApplicationViewSet, basename='admin-application')

urlpatterns = [
    path('', include(router.urls)),
]