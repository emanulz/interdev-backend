from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination
from ..models import Credit_Voucher, Money_Return
from .serializers import Credit_VoucherSerializer, Money_ReturnSerializer
from .filters import SearchCredit_VoucherFilter, SearchMoney_ReturnFilter
from .permissions import HasProperPermission

class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50

class Credit_VoucherViewSet(viewsets.ReadOnlyModelViewSet):
    
    serializer_class  = Credit_VoucherSerializer
    queryset = Credit_Voucher.objects.all()
    lookup_field = 'id'
    filter_class = SearchCredit_VoucherFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission(),]

class Money_ReturnViewSet(viewsets.ReadOnlyModelViewSet):
    
    serializer_class  = Money_ReturnSerializer
    queryset = Money_Return.objects.all()
    lookup_field = 'id'
    filter_class = SearchMoney_ReturnFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission(),]