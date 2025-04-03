from django.contrib import admin
from .models import Application

class ApplicationAdmin(admin.ModelAdmin):
    list_display = (
        'project', 'freelancer', 'bid_amount', 'status', 
        'is_shortlisted', 'created_at'
    )
    list_filter = (
        'status', 'is_shortlisted', 'created_at'
    )
    search_fields = (
        'freelancer__username', 'project__title', 'proposal_text'
    )
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        (None, {
            'fields': (
                'project', 'freelancer', 'bid_amount', 'proposal_text', 
                'attachments', 'status'
            )
        }),
        ('Additional Information', {
            'classes': ('collapse',),
            'fields': (
                'estimated_completion_time', 'freelancer_rating', 
                'employer_feedback', 'is_shortlisted'
            )
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

admin.site.register(Application, ApplicationAdmin)
