# chat/models.py
from django.db import models
from account.models import CustomUser as User  # assuming you use CustomUser as the User model

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    # Additional fields
    chat_room = models.CharField(max_length=255, blank=True, null=True)  # If you want to group messages
    attachment = models.FileField(upload_to='chat_attachments/', blank=True, null=True)  # Optional attachment field
    status = models.CharField(max_length=50, choices=[('sent', 'Sent'), ('delivered', 'Delivered'), ('seen', 'Seen')], default='sent')

    def __str__(self):
        return f"Message from {self.sender} to {self.receiver} at {self.sent_at}"
