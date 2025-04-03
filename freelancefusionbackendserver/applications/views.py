from rest_framework import viewsets
from .models import Application
from .serializers import ApplicationSerializer
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer
class  FreelancerApplicationViewSet(viewsets.ModelViewSet):
    renderer_classes = [UserRenderer]
    permission_classes = [IsFreelancerUser]
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    
class  EmployerApplicationViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    
class  AdminApplicationViewSet(viewsets.ModelViewSet):
    
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    