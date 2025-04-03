from django.contrib import admin
from .models import Notification

class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'type', 'is_read', 'is_urgent', 'created_at')
    list_filter = ('type', 'is_read', 'is_urgent', 'created_at')
    search_fields = ('user__username', 'message', 'action_url')
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('user', 'type', 'message', 'is_read')
        }),
        ('Action & Urgency', {
            'fields': ('action_url', 'is_urgent', 'related_project'),
            'classes': ('collapse',),
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
        }),
    )

admin.site.register(Notification, NotificationAdmin)
