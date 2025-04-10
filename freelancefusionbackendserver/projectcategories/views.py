# projectcategories/views.py
from rest_framework import viewsets
from .models import ProjectCategory
from .serializers import ProjectCategorySerializer
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer

class AdminProjectCategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer
    
    
class EmployerProjectCategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer