# projects/views.py
from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer
class FreelancerProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsFreelancerUser]
    renderer_classes = [UserRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class EmployerProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class AdminProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
        
    
    