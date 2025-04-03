from rest_framework import serializers
from .models import OrganizationSetting, FreelanceOrganizationSetting

class OrganizationSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganizationSetting
        fields = '__all__'


class FreelanceOrganizationSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelanceOrganizationSetting
        fields = '__all__'
