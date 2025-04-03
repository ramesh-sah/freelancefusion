# chat/views.py
from rest_framework import viewsets
from .models import Message
from .serializers import MessageSerializer
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer
class  FreelancerMessageViewSet(viewsets.ModelViewSet):
    permission_classes = [IsFreelancerUser]
    renderer_classes = [UserRenderer]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    
    
class EmployerMessageViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    # Optionally, you can filter or customize permissions here
    # permission_classes = [permissions.IsAuthenticated]
    
class AdminMessageViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    # Optionally, you can filter or customize permissions here
    # permission_classes = [permissions.IsAuthenticated]
    

