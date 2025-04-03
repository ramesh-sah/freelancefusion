from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'employer', 'status', 'budget', 'deadline', 'project_category', 'is_featured', 'created_at'
    )
    list_filter = (
        'status', 'project_category', 'payment_type', 'project_visibility', 'is_featured', 'deadline'
    )
    search_fields = (
        'title', 'description', 'employer__username', 'skills_required'
    )
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'employer', 'description', 'project_category')
        }),
        ('Budget & Deadlines', {
            'fields': ('budget', 'deadline', 'proposal_deadline')
        }),
        ('Project Details', {
            'fields': (
                'terms_conditions', 'status', 'skills_required', 'location_preference', 
                'attachments', 'estimated_hours', 'payment_type'
            )
        }),
        ('Additional Settings', {
            'classes': ('collapse',),
            'fields': (
                'client_rating', 'is_featured', 'contract_type', 'project_visibility', 
                'max_freelancers', 'preferred_experience_level'
            )
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

admin.site.register(Project, ProjectAdmin)
