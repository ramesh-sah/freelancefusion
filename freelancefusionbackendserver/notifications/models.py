# notifications/models.py
from django.db import models
from account.models import CustomUser as User  # Assuming you use CustomUser as the user model
from projects.models import Project
class Notification(models.Model):
    NOTIFICATION_TYPES = [
        ('message', 'Message'),
        ('project_update', 'Project Update'),
        ('reminder', 'Reminder'),
        ('content', 'Content'),
        ('system', 'System')  # For system notifications like maintenance, etc.
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    type = models.CharField(max_length=50, choices=NOTIFICATION_TYPES)
    message = models.TextField(max_length=1000)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Additional fields
    action_url = models.URLField(blank=True, null=True)  # URL to an action the user can take (e.g., "view project")
    is_urgent = models.BooleanField(default=False)  # Flag to mark notifications as urgent
    related_project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True, blank=True)  # Relate to a project if needed

    class Meta:
        ordering = ['-created_at']  # Newest notifications come first

    def __str__(self):
        return f"Notification for {self.user} - {self.type} at {self.created_at}"
