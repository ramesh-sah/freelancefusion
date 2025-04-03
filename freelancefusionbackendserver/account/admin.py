from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.db import models as db_models
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'full_name', 'user_type', 'account_status', 
                    'is_staff', 'is_active', 'verified', 'created_at')
    list_filter = ('user_type', 'account_status', 'is_staff', 'is_active',
                   'verified', 'experience_level', 'industry')
    search_fields = ('email', 'full_name', 'eth_address', 'contact_number')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Basic Information', {'fields': (
            'user_type', 'full_name', 'profile_picture', 'banner_image',
            'tag_line', 'location', 'contact_number'
        )}),
        ('Web3 Information', {'fields': ('eth_address',)}),
        ('Professional Profile', {'fields': (
            'professional_title', 'timezone_info', 'website', 
            'professional_summary', 'key_achievements', 'core_competencies',
            'technical_skills', 'soft_skills', 'industry_specific_skills',
            'work_experience', 'education', 'certifications',
            'portfolio_projects', 'awards', 'professional_affiliations'
        ), 'classes': ('collapse',)}),
        ('Career Details', {'fields': (
            'current_company', 'current_position', 'years_of_experience',
            'specializations', 'client_rating', 'completed_projects',
            'experience_level', 'industry', 'hourly_rate_value'
        ), 'classes': ('collapse',)}),
        ('Social & Files', {'fields': (
            'linkedin_url', 'github_url', 'twitter_url', 'facebook_url',
            'resume_file'
        ), 'classes': ('collapse',)}),
        ('Additional Information', {'fields': (
            'languages', 'interests', 'references', 'services_offered',
            'rates_packages', 'availability', 'client_success_metrics'
        ), 'classes': ('collapse',)}),
        ('Status & Permissions', {'fields': (
            'account_status', 'is_active', 'is_staff', 'verified',
            'groups', 'user_permissions'
        )}),
        ('Timestamps', {'fields': ('created_at', 'updated_at')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'password1', 'password2', 
                'user_type', 'full_name', 'is_staff', 'is_active'
            ),
        }),
    )

    formfield_overrides = {
        db_models.TextField: {'widget': forms.Textarea(attrs={'rows': 4, 'cols': 40})},
    }

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        is_superuser = request.user.is_superuser
        
        if not is_superuser:
            form.base_fields['is_staff'].disabled = True
            form.base_fields['groups'].disabled = True
            form.base_fields['user_permissions'].disabled = True
            
        return form

admin.site.register(CustomUser, CustomUserAdmin)