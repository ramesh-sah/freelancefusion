from django.contrib import admin
from .models import Contract

class ContractAdmin(admin.ModelAdmin):
    list_display = (
        'project', 'freelancer', 'employer', 'agreed_amount',
        'status', 'payment_status', 'start_date', 'end_date', 'created_at'
    )
    list_filter = (
        'status', 'payment_status', 'is_disputed',
        'start_date', 'end_date', 'created_at'
    )
    search_fields = (
        'project__title', 'employer__username', 'freelancer__username',
        'contract_address', 'tx_hash'
    )
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': (
                'project', 'freelancer', 'employer', 'agreed_amount',
                'payment_status', 'status'
            )
        }),
        ('Contract Duration', {
            'fields': ('start_date', 'end_date'),
            'description': 'Specify the start and end dates for the contract. The start date cannot be in the past, and the end date must be after the start date.'
        }),
        ('Contract Details', {
            'classes': ('collapse',),
            'fields': ('terms_and_conditions', 'contract_address', 'tx_hash')
        }),
        ('Feedback & Ratings', {
            'classes': ('collapse',),
            'fields': (
                'employer_feedback', 'freelancer_feedback',
                'employer_rating', 'freelancer_rating'
            )
        }),
        ('Additional Info', {
            'fields': ('is_disputed',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

admin.site.register(Contract, ContractAdmin)
