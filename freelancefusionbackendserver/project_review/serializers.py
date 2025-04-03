# project_review/serializers.py
from rest_framework import serializers
from .models import ProjectReview
from account.models import CustomUser as User
from project_review.models import Project

class ProjectReviewSerializer(serializers.ModelSerializer):
    reviewer = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    reviewee = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects.all())

    class Meta:
        model = ProjectReview
        fields = ['id', 'reviewer', 'reviewee', 'project', 'comment', 'rating', 'created_at', 'updated_at', 'is_approved', 'is_anonymous']
        read_only_fields = ['created_at', 'updated_at']
