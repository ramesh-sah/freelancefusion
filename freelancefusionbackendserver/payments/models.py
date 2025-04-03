# models.py
from django.db import models

class Payment(models.Model):
    STATUS_CHOICES = [
        ('Initiated', 'Initiated'),
        ('Pending', 'Pending'),
        ('Completed', 'Completed'),
        ('Refunded', 'Refunded'),
        ('Expired', 'Expired'),
        ('User canceled', 'User canceled'),
    ]
    
    purchase_order_id = models.CharField(max_length=255, unique=True)
    purchase_order_name = models.CharField(max_length=255)
    amount = models.PositiveIntegerField()  # Amount in paisa
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Initiated')
    transaction_id = models.CharField(max_length=255, null=True, blank=True)
    pidx = models.CharField(max_length=255, null=True, blank=True)
    customer_name = models.CharField(max_length=255, null=True, blank=True)
    customer_email = models.EmailField(null=True, blank=True)
    customer_phone = models.CharField(max_length=15, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.purchase_order_id} - {self.status}"