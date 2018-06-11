from rest_framework import viewsets

from ..models import Work_Order, Labor, UsedPart, PartRequest
from .filters import Work_OrderFilter, LaborFilter, UsedPartFilter, PartRequestFilter
from .serializers import Work_OrderSerializer, LaborSerializer, UsedPartSerializer, PartRequestSerializer
from .permissions import HasProperPermission
from rest_framework.pagination import LimitOffsetPagination


class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50

class Work_OrderViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = Work_OrderSerializer
    queryset = Work_Order.objects.all()
    lookup_field = 'id'
    filter_class = Work_OrderFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission()]

class LaborViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LaborSerializer
    queryset = Labor.objects.all()
    lookup_field = 'id'
    filter_class = LaborFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission()]

class UsedPartViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UsedPartSerializer
    queryset = UsedPart.objects.all()
    lookup_field = 'id'
    filter_class = UsedPartFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission()]

class PartRequestViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PartRequestSerializer
    queryset = PartRequest.objects.all()
    lookup_field = 'id'
    filter_class = PartRequestFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        return [HasProperPermission()]