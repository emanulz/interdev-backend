from rest_framework import viewsets

from ..models import Work_Order, Labor, Parts_Request
from .filters import Work_OrderFilter, LaborFilter, Parts_RequestFilter
from .serializers import Work_OrderSerializer, LaborSerializer, Parts_RequestSerializer
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

class Parts_RequestViewSet(viewsets.ModelViewSet):
    serializer_class = Parts_RequestSerializer
    queryset = Parts_Request.objects.all()
    lookup_field = 'id'
    filter_class =  Parts_RequestFilter