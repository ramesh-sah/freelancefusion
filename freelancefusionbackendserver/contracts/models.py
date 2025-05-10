from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from projects.models import Project
from account.models import CustomUser as User
from decimal import Decimal
from datetime import date

class Contract(models.Model):
    STATUS_CHOICES = [
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='contracts')
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='freelancer_contracts')
    employer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='employer_contracts')
    agreed_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(Decimal('0.00'))],
        help_text="The amount agreed upon for this contract."
    )
    start_date = models.DateField(help_text="The date when the contract starts.")
    end_date = models.DateField(blank=True, null=True, help_text="The date when the contract ends.")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    payment_status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('paid', 'Paid'), ('partially_paid', 'Partially Paid')],
        default='pending'
    )
    terms_and_conditions = models.TextField(help_text="Terms and conditions for the contract.")
    employer_feedback = models.TextField(blank=True, null=True, help_text="Feedback provided by the employer.")
    freelancer_feedback = models.TextField(blank=True, null=True, help_text="Feedback provided by the freelancer.")
    employer_rating = models.FloatField(
        blank=True,
        null=True,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        help_text="Rating given by the freelancer for the employer (out of 5)."
    )
    freelancer_rating = models.FloatField(
        blank=True,
        null=True,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        help_text="Rating given by the employer for the freelancer (out of 5)."
    )
    is_disputed = models.BooleanField(default=False, help_text="Indicates whether the contract is in dispute.")
    
    # Additional fields for contract management
    contract_address = models.CharField(max_length=42, blank=True, null=True)
    tx_hash = models.CharField(max_length=66, blank=True, null=True)

    # def clean(self):
    #     """Custom validation to ensure start_date is before end_date."""
    #     if self.end_date and self.start_date > self.end_date:
    #         raise ValueError("End date cannot be earlier than start date.")
    #     if self.start_date < date.today():
    #         raise ValueError("Start date cannot be in the past.")

    def __str__(self):
        return f"Contract for {self.project.title} between {self.employer.username} and {self.freelancer.username}"

    class Meta:
        unique_together = ('project', 'freelancer')  # A freelancer can only have one contract per project.