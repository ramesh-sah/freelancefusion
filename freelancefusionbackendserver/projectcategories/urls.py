# projectcategories/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdminProjectCategoryViewSet

router = DefaultRouter()
router.register(r'admin-projectcategories', AdminProjectCategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
