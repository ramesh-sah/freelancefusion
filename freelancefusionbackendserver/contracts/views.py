from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Contract
from .serializers import ContractSerializer
from freelancefusionbackendserver.permissions import IsAdminUser, IsEmployerUser, IsFreelancerUser
from freelancefusionbackendserver.renderers import UserRenderer
class FreelancerContractViewSet(viewsets.ModelViewSet):
    permission_classes = [IsFreelancerUser]
    renderer_classes = [UserRenderer]
    
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
    # permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     """
    #     Customize the queryset based on the logged-in user.
    #     Employers see contracts for their projects.
    #     Freelancers see contracts they're involved in.
    #     """
    #     user = self.request.user
    #     if user.is_employer:
    #         return Contract.objects.filter(employer=user)
    #     elif user.is_freelancer:
    #         return Contract.objects.filter(freelancer=user)
    #     return Contract.objects.none()

    # def perform_create(self, serializer):
    #     """
    #     Automatically set the employer when creating a contract.
    #     """
    #     serializer.save(employer=self.request.user)
    
    
class EmployerContractViewSet(viewsets.ModelViewSet):
    permission_classes = [IsEmployerUser]
    renderer_classes = [UserRenderer]
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
    
class AdminContractViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminUser]
    renderer_classes = [UserRenderer]
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer