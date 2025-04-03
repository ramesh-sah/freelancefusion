from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from django.core.validators import MaxLengthValidator
from .managers import CustomUserManager

USER_TYPE_CHOICES = (
    ('freelancer', 'Freelancer'),
    ('employer', 'Employer'),
    ('admin', 'Admin'),
)

ACCOUNT_STATUS_CHOICES = (
    ('active', 'Active'),
    ('inactive', 'Inactive'),
)

EXPERIENCE_LEVEL_CHOICES = (
    ('entry', 'Entry Level'),
    ('intermediate', 'Intermediate'),
    ('expert', 'Expert'),
)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    # Basic Account Fields
    email = models.EmailField(unique=True, max_length=255)
    user_type = models.CharField(max_length=50, choices=USER_TYPE_CHOICES)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    banner_image = models.ImageField(upload_to='banner_images/', blank=True, null=True)
    tag_line = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    contact_number = models.CharField(max_length=20, blank=True, null=True)
    account_status = models.CharField(max_length=20, choices=ACCOUNT_STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    #web3 fields
    eth_address = models.CharField(max_length=42, blank=True, null=True, unique=True)
    
    # Extended Profile Fields
    full_name = models.CharField(max_length=255)
    professional_title = models.CharField(max_length=255, blank=True, null=True)
    timezone_info = models.CharField(max_length=100, blank=True, null=True)
    website = models.URLField(blank=True, null=True, max_length=200)
    professional_summary = models.TextField(
        blank=True, null=True, 
        validators=[MaxLengthValidator(1000)],
        help_text="Brief summary of your professional experience (max 1000 characters)."
    )
    key_achievements = models.TextField(
        blank=True, null=True, 
        validators=[MaxLengthValidator(1000)],
        help_text="Key achievements in your career (max 1000 characters)."
    )
    core_competencies = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="List main competencies separated by commas (max 500 characters)."
    )
    technical_skills = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="List technical skills (e.g., Python, Django, React) separated by commas (max 500 characters)."
    )
    soft_skills = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="List soft skills (e.g., communication, teamwork) separated by commas (max 500 characters)."
    )
    industry_specific_skills = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="List niche-specific skills relevant to your industry (max 500 characters)."
    )
    work_experience = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(3000)],
        help_text="Detailed overview of past roles, projects, and client feedback (max 3000 characters)."
    )
    education = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(2000)],
        help_text="Academic degrees, relevant courses, and continuing education details (max 2000 characters)."
    )
    certifications = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(1000)],
        help_text="Certifications and licenses including dates and issuing organizations (max 1000 characters)."
    )
    portfolio_projects = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(3000)],
        help_text="Details and links to featured projects or case studies (max 3000 characters)."
    )
    awards = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="Industry awards and recognitions that boost credibility (max 500 characters)."
    )
    professional_affiliations = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="Memberships, associations, or volunteer roles (max 500 characters)."
    )
    languages = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(250)],
        help_text="Languages you speak and proficiency levels (max 250 characters)."
    )
    interests = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(250)],
        help_text="Optional hobbies or interests (max 250 characters)."
    )
    references = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="References or client endorsements (max 500 characters)."
    )
    services_offered = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="List the freelance services you provide (max 500 characters)."
    )
    rates_packages = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(250)],
        help_text="Hourly rates or package details (max 250 characters)."
    )
    availability = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(250)],
        help_text="Current availability or preferred working hours (max 250 characters)."
    )
    client_success_metrics = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(250)],
        help_text="Quantitative results and success stories (max 250 characters)."
    )
    
    # Additional Enhancements
    verified = models.BooleanField(default=False, help_text="Indicates if the user has been verified.")
    resume_file = models.FileField(upload_to='resumes/', blank=True, null=True)
    hourly_rate_value = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    experience_level = models.CharField(max_length=50, choices=EXPERIENCE_LEVEL_CHOICES, blank=True, null=True)
    industry = models.CharField(max_length=100, blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True, max_length=200)
    github_url = models.URLField(blank=True, null=True, max_length=200)
    twitter_url = models.URLField(blank=True, null=True, max_length=200)
    facebook_url = models.URLField(blank=True, null=True, max_length=200)
    
    # Additional Professional Fields
    current_company = models.CharField(max_length=255, blank=True, null=True)
    current_position = models.CharField(max_length=255, blank=True, null=True)
    years_of_experience = models.PositiveIntegerField(blank=True, null=True)
    specializations = models.TextField(
        blank=True, null=True,
        validators=[MaxLengthValidator(500)],
        help_text="Your areas of specialization (max 500 characters)."
    )
    client_rating = models.DecimalField(
        max_digits=3, decimal_places=2, blank=True, null=True,
        help_text="Client rating out of 5 (e.g., 4.75)."
    )
    completed_projects = models.PositiveIntegerField(
        blank=True, null=True,
        help_text="Number of completed projects."
    )

    # Permissions and Administrative Fields
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # For admin site access
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_type', 'full_name']
    
    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.full_name

    def get_short_name(self):
        return self.full_name.split()[0]
