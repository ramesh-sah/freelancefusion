# project_review/models.py
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from projectcategories.models import ProjectCategory
from account.models import CustomUser as User  # Assuming you use CustomUser for the user model
from projects.models import Project


class ProjectReview(models.Model):
    reviewer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_given')
    reviewee = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_received')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='reviews')
    comment = models.TextField(max_length=1000, blank=True, null=True)
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        help_text="Rating should be between 1 and 5"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Optional fields
    is_approved = models.BooleanField(default=False)  # Field to mark if the review is approved by an admin or reviewer
    is_anonymous = models.BooleanField(default=False)  # Option to make the review anonymous

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['reviewer', 'project'], name='unique_review_for_project')
        ]

    def __str__(self):
        return f"Review by {self.reviewer} for {self.project.title}"

