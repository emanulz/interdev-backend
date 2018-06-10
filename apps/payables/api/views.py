from rest_framework import viewsets
from ..models import Credit_Movement, Credit_Payment
from .filters import Credit_MovementFilter, Credit_PaymentFilter
from .serializers import Credit_MovementSerializer, Credit_PaymentSerializer
from .permissions import HasProperPermission, HasProperPermissionCreditPayment
from rest_framework.pagination import LimitOffsetPagination


class CreditPaymentCreateViewSet(viewsets.ViewSet):

    queryset = Credit_Payment.objects.all()

    def create(self, request):
        req_data = request.req_data
        user_id = request.user.id

        try:
            pass
        except:
            pass

class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50

class Credit_MovementPayableViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = Credit_MovementSerializer
    queryset = Credit_Movement.objects.all()
    lookup_field= 'id'
    filter_class = Credit_MovementFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission(),]

class Credit_PaymentPayableViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = Credit_PaymentSerializer
    queryset = Credit_Payment.objects.all()
    lookup_field = 'id'
    filter_class = Credit_PaymentFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermissionCreditPayment(), ]