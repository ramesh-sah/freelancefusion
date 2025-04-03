from rest_framework import serializers
from .models import Application

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = [
            'id', 'project', 'freelancer', 'bid_amount', 'proposal_text', 'attachments', 
            'status', 'created_at', 'updated_at', 'estimated_completion_time', 
            'freelancer_rating', 'employer_feedback', 'is_shortlisted'
        ]
        read_only_fields = ['created_at', 'updated_at']