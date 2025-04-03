from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from projects.models import Project
from account.models import CustomUser as User
from decimal import Decimal

class Application(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
        ('reviewing', 'Under Review'),
    ]

    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='applications')
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    bid_amount = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(Decimal('0.00'))]  # Use Decimal for min_value
    )
    proposal_text = models.TextField()
    attachments = models.FileField(upload_to='application_attachments/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    estimated_completion_time = models.PositiveIntegerField(
        blank=True, 
        null=True, 
        help_text="Estimated completion time in days."
    )
    freelancer_rating = models.FloatField(
        blank=True, 
        null=True, 
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        help_text="Rating out of 5 for the freelancer's work."
    )
    employer_feedback = models.TextField(blank=True, null=True, help_text="Feedback from the employer.")
    is_shortlisted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.freelancer.username} - {self.project.title}"

    class Meta:
        unique_together = ('project', 'freelancer')  # Ensure a freelancer applies to a project only once.