from django.contrib import admin
from .models import Payment

class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        'purchase_order_id', 'purchase_order_name', 'amount', 
        'status', 'created_at'
    )
    list_filter = ('status', 'created_at')
    search_fields = (
        'purchase_order_id', 'purchase_order_name', 
        'customer_name', 'customer_email'
    )
    ordering = ('-created_at',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('purchase_order_id', 'purchase_order_name', 'amount', 'status')
        }),
        ('Transaction Details', {
            'fields': ('transaction_id', 'pidx')
        }),
        ('Customer Details', {
            'fields': ('customer_name', 'customer_email', 'customer_phone')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

admin.site.register(Payment, PaymentAdmin)
