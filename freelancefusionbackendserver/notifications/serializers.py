# notifications/serializers.py
from rest_framework import serializers
from .models import Notification
from account.models import CustomUser as User

class NotificationSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Notification
        fields = ['id', 'user', 'type', 'message', 'is_read', 'created_at', 'updated_at', 'action_url', 'is_urgent', 'related_project']
        read_only_fields = ['created_at', 'updated_at']
