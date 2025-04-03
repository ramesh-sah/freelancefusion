from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from account.models import CustomUser as User

class BaseOrganizationSetting(models.Model):
    """
    Abstract base model for organization settings.
    Contains common fields for all organization types.
    """
    # Basic Information
    name = models.CharField(max_length=255, unique=True, verbose_name="Organization Name")
    about_us = models.TextField(max_length=2000, blank=True, null=True, help_text="Description about the organization")
    terms_and_conditions = models.TextField(max_length=2000, blank=True, null=True)
    logo = models.ImageField(upload_to='organization_logos/', blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)
    contact_phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.CharField(max_length=500, blank=True, null=True)
    social_media_links = models.JSONField(blank=True, null=True)

    # Legal and Compliance
    privacy_policy = models.TextField(max_length=2000, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    organization_type = models.CharField(
        max_length=50,
        choices=[('nonprofit', 'Nonprofit'), ('corporation', 'Corporation'), ('startup', 'Startup')],
        blank=True,
        null=True
    )

    # Statements
    mission_statement = models.TextField(max_length=1000, blank=True, null=True)
    vision_statement = models.TextField(max_length=1000, blank=True, null=True)
    founding_year = models.PositiveIntegerField(validators=[MinValueValidator(1900)], blank=True, null=True)
    registration_number = models.CharField(max_length=255, blank=True, null=True)
    vat_number = models.CharField(max_length=255, blank=True, null=True)

    # Contact Preferences
    contact_preference = models.CharField(
        max_length=50,
        choices=[('email', 'Email'), ('phone', 'Phone'), ('none', 'None')],
        default='email'
    )

    # Payment and Transaction Settings
    payment_terms = models.TextField(max_length=2000, blank=True, null=True)
    currency = models.CharField(max_length=10, blank=True, null=True)
    invoice_template = models.FileField(upload_to='invoice_templates/', blank=True, null=True)

    # Multi-language Support
    default_language = models.CharField(max_length=50, default='en')
    supported_languages = models.JSONField(blank=True, null=True)

    # Operational and Legal Fields
    operational_region = models.CharField(max_length=255, blank=True, null=True)
    legal_compliance = models.TextField(max_length=3000, blank=True, null=True)
    insurance_provider = models.CharField(max_length=255, blank=True, null=True)
    business_hours = models.CharField(max_length=255, blank=True, null=True)

    # Additional Features
    is_featured = models.BooleanField(default=False)
    customer_support_email = models.EmailField(blank=True, null=True)
    customer_support_phone = models.CharField(max_length=20, blank=True, null=True)

    # Branding and Visuals
    theme_color = models.CharField(max_length=7, blank=True, null=True, help_text="Hex color code for theme")
    branding_font = models.CharField(max_length=255, blank=True, null=True)
    banner_image = models.ImageField(upload_to='banners/', blank=True, null=True)
    favicon = models.ImageField(upload_to='favicons/', blank=True, null=True)

    # Tax and Legal Information
    tax_exemption_status = models.BooleanField(default=False)
    legal_address = models.CharField(max_length=500, blank=True, null=True)
    tax_registration_number = models.CharField(max_length=255, blank=True, null=True)

    # Notification Settings
    notification_preferences = models.JSONField(blank=True, null=True)
    email_notifications_enabled = models.BooleanField(default=True)
    sms_notifications_enabled = models.BooleanField(default=False)

    # Subscription and Billing
    subscription_plan = models.CharField(max_length=50, blank=True, null=True)
    plan_expiration_date = models.DateField(blank=True, null=True)
    billing_address = models.CharField(max_length=500, blank=True, null=True)
    payment_gateway_info = models.JSONField(blank=True, null=True)

    # Security Settings
    two_factor_authentication_enabled = models.BooleanField(default=False)
    password_expiry_days = models.PositiveIntegerField(default=90)

    # Human Resources (HR)
    employee_count = models.PositiveIntegerField(blank=True, null=True)
    vacation_policy = models.TextField(blank=True, null=True)
    employee_benefits = models.TextField(blank=True, null=True)
    organizational_structure = models.JSONField(blank=True, null=True)

    # Operational Tools
    internal_comms_tool = models.CharField(max_length=255, blank=True, null=True)
    project_management_tool = models.CharField(max_length=255, blank=True, null=True)
    task_automation_tools = models.JSONField(blank=True, null=True)

    # User Preferences
    default_time_zone = models.CharField(max_length=50, default='UTC')
    date_format = models.CharField(max_length=50, default='MM/DD/YYYY')
    currency_symbol = models.CharField(max_length=5, blank=True, null=True)

    # External Integrations
    integration_with_crm = models.BooleanField(default=False)
    integration_with_marketing_tools = models.BooleanField(default=False)
    api_key_for_integrations = models.CharField(max_length=255, blank=True, null=True)

    # Legal Documents and Audit
    compliance_documents = models.FileField(upload_to='compliance_docs/', blank=True, null=True)
    audit_log_enabled = models.BooleanField(default=False)

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-created_at']

    def __str__(self):
        return self.name

class OrganizationSetting(BaseOrganizationSetting):
    """
    Concrete model for organization settings.
    Inherits all base fields and serves as the primary settings model.
    """
    # Additional organization-specific fields can be added here if necessary.
    pass

class FreelanceOrganizationSetting(OrganizationSetting):
    """
    Extended model for freelance fusion platforms (e.g., Upwork-like settings).
    Adds freelance-specific fields to support rating systems, project categorization,
    membership levels, and secure transaction features.
    """
    # Freelance-specific fields
    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)],
        help_text="Average rating out of 5"
    )
    number_of_reviews = models.PositiveIntegerField(default=0, help_text="Total number of reviews received")
    project_categories = models.JSONField(blank=True, null=True, help_text="List of project categories offered")
    verified_freelancers = models.BooleanField(default=False, help_text="Indicates if the organization has verified freelancers")
    membership_level = models.CharField(
        max_length=50,
        choices=[('basic', 'Basic'), ('premium', 'Premium'), ('enterprise', 'Enterprise')],
        default='basic',
        help_text="Membership level for the organization"
    )
    commission_rate = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=0.0,
        help_text="Commission rate (%) for freelance transactions"
    )
    escrow_enabled = models.BooleanField(default=True, help_text="Enable escrow services for secure payments")
    dispute_resolution_policy = models.TextField(max_length=3000, blank=True, null=True, help_text="Policy details for dispute resolution")
    portfolio_link = models.URLField(blank=True, null=True, help_text="Link to the organization's portfolio or showcase")

    def __str__(self):
        return f"{self.name} (Freelance Settings)"
