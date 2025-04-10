# project_review/views.py
from rest_framework import viewsets
from .models import ProjectReview
from .serializers import ProjectReviewSerializer
from rest_framework.permissions import IsAuthenticated
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer

class FreelancerProjectReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [IsFreelancerUser]
    renderer_classes = [UserRenderer]
    queryset = ProjectReview.objects.all()
    serializer_class = ProjectReviewSerializer
    

    def perform_create(self, serializer):
        # Optionally, handle review creation logic, such as restricting reviews to only completed projects
        serializer.save()
    def get_queryset(self):
        # Filter applications to only those belonging to the current user
        return ProjectReview.objects.filter(freelancer=self.request.user)
        
        
class EmployerProjectReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = ProjectReview.objects.all()
    serializer_class = ProjectReviewSerializer
    

    def perform_create(self, serializer):
        # Optionally, handle review creation logic, such as restricting reviews to only completed projects
        serializer.save()
        
    def get_queryset(self):
        # Filter applications to only those belonging to the current user
        return ProjectReview.objects.filter(employer=self.request.user)
        

class AdminProjectReviewViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = ProjectReview.objects.all()
    serializer_class = ProjectReviewSerializer
    

    def perform_create(self, serializer):
        # Optionally, handle review creation logic, such as restricting reviews to only completed projects
        serializer.save()
