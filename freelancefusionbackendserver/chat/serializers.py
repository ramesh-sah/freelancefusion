# chat/serializers.py
from rest_framework import serializers
from .models import Message
from account.models import CustomUser as User

class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    receiver = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Message
        fields = ['id', 'sender', 'receiver', 'message', 'sent_at', 'is_read', 'chat_room', 'attachment', 'status']
