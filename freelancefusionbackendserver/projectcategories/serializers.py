# projectcategories/serializers.py
from rest_framework import serializers
from .models import ProjectCategory

class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = '__all__'