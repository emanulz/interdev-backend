from rest_framework import viewsets

from ..models import Work_Order, Labor, UsedPart
from .filters import Work_OrderFilter, LaborFilter, UsedPartFilter
from .serializers import Work_OrderSerializer, LaborSerializer, UsedPartSerializer
from .permissions import HasProperPermission

class Work_OrderViewSet(viewsets.ModelViewSet):
    serializer_class = Work_OrderSerializer
    queryset = Work_Order.objects.all()
    lookup_field = 'id'
    filter_class = Work_OrderFilter

    def get_permissions(self):
        return [HasProperPermission()]

class LaborViewSet(viewsets.ModelViewSet):
    serializer_class = LaborSerializer
    queryset = Labor.objects.all()
    lookup_field = 'id'
    filter_class = LaborFilter

    def get_permissions(self):
        return [HasProperPermission()]

class UsedPartViewSet(viewsets.ModelViewSet):
    serializer_class = UsedPartSerializer
    queryset = UsedPart.objects.all()
    lookup_field = 'id'
    filter_class = UsedPartFilter

    def get_permissions(self):
        return [HasProperPermission()]