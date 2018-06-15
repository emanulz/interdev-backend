from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination
from ..models import Credit_Voucher
from .serializers import Credit_VoucherSerializer
from .filters import SearchCredit_Voucher
from .permissions import HasProperPermission

class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50

class Credit_VoucherViewSetPayable(viewsets.ReadOnlyModelViewSet):
    
    serializer_class  = Credit_VoucherSerializer
    queryset = Credit_Voucher.objects.all()
    lookup_field = 'id'
    filter_class = SearchCredit_Voucher
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission(),]