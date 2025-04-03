from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from projectcategories.models import ProjectCategory
from account.models import CustomUser as User

class Project(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')
    ]

    PAYMENT_TYPE_CHOICES = [
        ('fixed', 'Fixed Price'),
        ('hourly', 'Hourly')
    ]

    VISIBILITY_CHOICES = [
        ('public', 'Public'),
        ('private', 'Private')
    ]

    employer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    budget = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        help_text="Enter the project budget as a positive decimal value (e.g., 5000.00)"
    )
    deadline = models.DateField()
    terms_conditions = models.TextField()
    project_category = models.ForeignKey(ProjectCategory, on_delete=models.SET_NULL, null=True, related_name='projects')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='open')
    skills_required = models.CharField(max_length=255, blank=True, null=True)
    location_preference = models.CharField(max_length=255, blank=True, null=True)
    attachments = models.FileField(upload_to='project_attachments/', blank=True, null=True)
    estimated_hours = models.PositiveIntegerField(blank=True, null=True)
    payment_type = models.CharField(max_length=50, choices=PAYMENT_TYPE_CHOICES, default='fixed')
    client_rating = models.FloatField(blank=True, null=True, validators=[MinValueValidator(0), MaxValueValidator(5)])
    proposal_deadline = models.DateField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    contract_type = models.CharField(max_length=100, blank=True, null=True)
    project_visibility = models.CharField(max_length=50, choices=VISIBILITY_CHOICES, default='public')
    max_freelancers = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)])
    preferred_experience_level = models.CharField(max_length=50, choices=[('beginner', 'Beginner'), ('intermediate', 'Intermediate'), ('expert', 'Expert')], blank=True, null=True)

    def __str__(self):
        return self.title