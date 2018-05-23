from rest_framework import viewsets

from ..models import Purchase
from .filters import PurchaseFilter
from .serializers import PurchaseSerializer
from .permissions import HasProperPermission

class PurchaseViewSet(viewsets.ModelViewSet):
    serializer_class = PurchaseSerializer
    queryset = Purchase.objects.all()
    lookup_field = 'id'
    filter_class = PurchaseFilter

    def get_permissions(self):
        return [HasProperPermission()]