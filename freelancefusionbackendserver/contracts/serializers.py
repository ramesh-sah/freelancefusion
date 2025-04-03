from rest_framework import serializers
from .models import Contract

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = [
            'id', 'project', 'freelancer', 'employer', 'agreed_amount', 'start_date', 'end_date',
            'status', 'created_at', 'updated_at', 'payment_status', 'terms_and_conditions',
            'employer_feedback', 'freelancer_feedback', 'employer_rating', 'freelancer_rating',
            'is_disputed'
        ]
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        """Custom validation for start_date and end_date."""
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        if end_date and start_date > end_date:
            raise serializers.ValidationError("End date cannot be earlier than start date.")
        if start_date < date.today():
            raise serializers.ValidationError("Start date cannot be in the past.")
        return data