# notifications/views.py
from rest_framework import viewsets
from .models import Notification
from .serializers import NotificationSerializer
from rest_framework.permissions import IsAuthenticated
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer
class FreelancerNotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [IsFreelancerUser]
    renderer_classes = [UserRenderer]
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    # permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Optionally, handle notification creation logic, such as marking it urgent or relating it to a project
        serializer.save()
        
    def get_queryset(self):
        # Filter applications to only those belonging to the current user
        return Notification.objects.filter(freelancer=self.request.user)
        
        
        
class EmployerNotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    # permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Optionally, handle notification creation logic, such as marking it urgent or relating it to a project
        serializer.save()
        
    
        
        
class AdminNotificationViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    # permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        # Optionally, handle notification creation logic, such as marking it urgent or relating it to a project
        serializer.save()
        
        
        
