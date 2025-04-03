from django.contrib import admin
from .models import OrganizationSetting, FreelanceOrganizationSetting

class OrganizationSettingAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'is_verified', 'organization_type', 'created_at')
    list_filter = ('is_active', 'is_verified', 'organization_type', 'created_at')
    search_fields = ('name', 'contact_email')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'about_us', 'terms_and_conditions', 'logo')
        }),
        ('Contact Details', {
            'classes': ('collapse',),
            'fields': ('contact_email', 'contact_phone', 'address', 'social_media_links')
        }),
        ('Legal & Compliance', {
            'classes': ('collapse',),
            'fields': ('privacy_policy', 'is_active', 'is_verified', 'organization_type', 'registration_number', 'vat_number')
        }),
        ('Statements', {
            'classes': ('collapse',),
            'fields': ('mission_statement', 'vision_statement', 'founding_year')
        }),
        ('Payment & Preferences', {
            'classes': ('collapse',),
            'fields': ('contact_preference', 'payment_terms', 'currency', 'invoice_template')
        }),
        ('Operational & Language', {
            'classes': ('collapse',),
            'fields': ('default_language', 'supported_languages', 'operational_region', 'legal_compliance', 'insurance_provider', 'business_hours')
        }),
        ('Additional Features', {
            'classes': ('collapse',),
            'fields': ('is_featured', 'customer_support_email', 'customer_support_phone')
        }),
        ('Branding & Visuals', {
            'classes': ('collapse',),
            'fields': ('theme_color', 'branding_font', 'banner_image', 'favicon')
        }),
        ('Tax & Legal', {
            'classes': ('collapse',),
            'fields': ('tax_exemption_status', 'legal_address', 'tax_registration_number')
        }),
        ('Notification Settings', {
            'classes': ('collapse',),
            'fields': ('notification_preferences', 'email_notifications_enabled', 'sms_notifications_enabled')
        }),
        ('Subscription & Billing', {
            'classes': ('collapse',),
            'fields': ('subscription_plan', 'plan_expiration_date', 'billing_address', 'payment_gateway_info')
        }),
        ('Security & HR', {
            'classes': ('collapse',),
            'fields': ('two_factor_authentication_enabled', 'password_expiry_days', 'employee_count', 'vacation_policy', 'employee_benefits', 'organizational_structure')
        }),
        ('Operational Tools', {
            'classes': ('collapse',),
            'fields': ('internal_comms_tool', 'project_management_tool', 'task_automation_tools')
        }),
        ('User Preferences', {
            'classes': ('collapse',),
            'fields': ('default_time_zone', 'date_format', 'currency_symbol')
        }),
        ('External Integrations', {
            'classes': ('collapse',),
            'fields': ('integration_with_crm', 'integration_with_marketing_tools', 'api_key_for_integrations')
        }),
        ('Legal Documents & Audit', {
            'classes': ('collapse',),
            'fields': ('compliance_documents', 'audit_log_enabled')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

class FreelanceOrganizationSettingAdmin(OrganizationSettingAdmin):
    list_display = ('name', 'is_active', 'is_verified', 'membership_level', 'created_at')
    
    # Extend the base fieldsets with freelance-specific fields
    fieldsets = OrganizationSettingAdmin.fieldsets + (
        ('Freelance Specific Settings', {
            'classes': ('collapse',),
            'fields': (
                'rating', 'number_of_reviews', 'project_categories', 'verified_freelancers',
                'membership_level', 'commission_rate', 'escrow_enabled', 'dispute_resolution_policy',
                'portfolio_link'
            )
        }),
    )

admin.site.register(OrganizationSetting, OrganizationSettingAdmin)
admin.site.register(FreelanceOrganizationSetting, FreelanceOrganizationSettingAdmin)
