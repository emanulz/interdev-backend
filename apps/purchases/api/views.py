from rest_framework import viewsets

from ..models import Purchase
from .filters import PurchaseFilter
from .serializers import PurchaseSerializer
from .permissions import HasProperPermission
from apps.utils.exceptions import TransactionError
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import status
from rest_framework.response import Response
from apps.purchases.api.serializers import PurchaseSerializer


class PurchaseCreateViewSet(viewsets.ViewSet):
    queryset = Purchase.objects.all()

    def create(self, request):
        req_data = request.data
        user_id = request.user.id

        try:
            new_purchase = Purchase.create(user_id, **req_data)
            return Response(PurchaseSerializer(new_purchase).data, status=status.HTTP_201_CREATED)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk):
        req_data = request.data
        user_id = request.user.id

        try:
            updated_purchase = Purchase.partial_update(user_id, pk, **req_data)
            return Response(data=PurchaseSerializer(updated_purchase).data, status=status.HTTP_200_OK)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)

 
            
class PurchasePaginationClass(LimitOffsetPagination):
    default_limit = 50

class PurchaseViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PurchaseSerializer
    queryset = Purchase.objects.all()
    lookup_field = 'id'
    filter_class = PurchaseFilter
    pagination_class = PurchasePaginationClass

    def get_permissions(self):
        return [HasProperPermission()]

class PurchaseCompleteViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PurchaseSerializer
    queryset = Purchase.objects.filter(is_closed=True)
    lookup_field = 'id'
    filter_class = PurchaseFilter
    pagination_class = PurchasePaginationClass

class PurchaseIncompleteViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PurchaseSerializer
    queryset = Purchase.objects.filter(is_closed=False)
    lookup_field = 'id'
    filter_class = PurchaseFilter
    pagination_class = PurchasePaginationClass