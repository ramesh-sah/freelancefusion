# projectcategories/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdminProjectCategoryViewSet, EmployerProjectCategoryViewSet

router = DefaultRouter()
router.register(r'admin-projectcategories', AdminProjectCategoryViewSet, basename='admin-projectcategories')
router.register(r'employer-projectcategories', EmployerProjectCategoryViewSet, basename='employer-projectcategories')

urlpatterns = [
    path('', include(router.urls)),
]
