from rest_framework import viewsets
from ..models import Credit_Movement, Credit_Payment
from .filters import Credit_MovementFilter, Credit_PaymentFilter
from .serializers import Credit_MovementSerializer, Credit_PaymentSerializer
from .permissions import HasProperPermission, HasProperPermissionCreditPayment

class Credit_MovementPayableViewSet(viewsets.ModelViewSet):

    serializer_class = Credit_MovementSerializer
    queryset = Credit_Movement.objects.all()
    lookup_field= 'id'
    filter_class = Credit_MovementFilter

    def get_permissions(self):
        return [HasProperPermission(),]

class Credit_PaymentPayableViewSet(viewsets.ModelViewSet):

    serializer_class = Credit_PaymentSerializer
    queryset = Credit_Payment.objects.all()
    lookup_field = 'id'
    filter_class = Credit_PaymentFilter

    def get_permissions(self):
        return [HasProperPermissionCreditPayment(), ]