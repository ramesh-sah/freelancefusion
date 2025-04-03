# projects/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FreelancerProjectViewSet, EmployerProjectViewSet, AdminProjectViewSet

router = DefaultRouter()
router.register(r'freelancer-projects', FreelancerProjectViewSet,basename='freelancer-project')
router.register(r'employer-projects', EmployerProjectViewSet,basename='employer-project')
router.register(r'admin-projects', AdminProjectViewSet,basename='admin-project')

urlpatterns = [
    path('', include(router.urls)),
]