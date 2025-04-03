from rest_framework import viewsets
from .models import OrganizationSetting, FreelanceOrganizationSetting
from .serializers import OrganizationSettingSerializer, FreelanceOrganizationSettingSerializer
from freelancefusionbackendserver.permissions import IsAdminUser
from freelancefusionbackendserver.renderers import UserRenderer
class AdminOrganizationSettingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows organization settings to be viewed or edited.
    """
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = OrganizationSetting.objects.all()
    serializer_class = OrganizationSettingSerializer


class AdminFreelanceOrganizationSettingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows freelance-specific organization settings to be viewed or edited.
    """
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = FreelanceOrganizationSetting.objects.all()
    serializer_class = FreelanceOrganizationSettingSerializer
