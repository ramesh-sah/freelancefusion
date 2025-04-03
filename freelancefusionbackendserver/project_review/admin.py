from django.contrib import admin
from .models import ProjectReview

class ProjectReviewAdmin(admin.ModelAdmin):
    list_display = ('project', 'reviewer', 'rating', 'is_approved', 'is_anonymous', 'created_at')
    list_filter = ('rating', 'is_approved', 'is_anonymous', 'created_at')
    search_fields = ('project__title', 'reviewer__username', 'reviewee__username', 'comment')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Review Details', {
            'fields': ('project', 'reviewer', 'reviewee', 'rating', 'comment')
        }),
        ('Approval & Anonymity', {
            'fields': ('is_approved', 'is_anonymous'),
            'classes': ('collapse',),
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

admin.site.register(ProjectReview, ProjectReviewAdmin)
