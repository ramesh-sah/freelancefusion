from django.contrib import admin
from .models import Message

class MessageAdmin(admin.ModelAdmin):
    list_display = ('sender', 'receiver', 'sent_at', 'status', 'is_read')
    list_filter = ('status', 'is_read', 'sent_at', 'chat_room')
    search_fields = ('sender__username', 'receiver__username', 'message', 'chat_room')
    ordering = ('-sent_at',)
    readonly_fields = ('sent_at',)
    
    fieldsets = (
        (None, {
            'fields': ('sender', 'receiver', 'message')
        }),
        ('Media', {
            'fields': ('attachment', 'chat_room'),
            'classes': ('collapse',),
        }),
        ('Status Information', {
            'fields': ('status', 'is_read'),
        }),
        ('Timestamp', {
            'fields': ('sent_at',),
        }),
    )

admin.site.register(Message, MessageAdmin)
