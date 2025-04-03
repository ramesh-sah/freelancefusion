# project_review/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FreelancerProjectReviewViewSet, EmployerProjectReviewViewSet, AdminProjectReviewViewSet

router = DefaultRouter()
router.register(r'freelancer-reviews', FreelancerProjectReviewViewSet,basename='freelancer-review')
router.register(r'employer-reviews', EmployerProjectReviewViewSet,basename='employer-review')
router.register(r'admin-reviews', AdminProjectReviewViewSet,basename='admin-review')


urlpatterns = [
    path('', include(router.urls)),
]
