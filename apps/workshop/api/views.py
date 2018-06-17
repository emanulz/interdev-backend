from rest_framework import viewsets

from ..models import Work_Order, Labor, UsedPart, PartRequest
from .filters import Work_OrderFilter, LaborFilter, UsedPartFilter, PartRequestFilter
from .serializers import Work_OrderSerializer, LaborSerializer, UsedPartSerializer, PartRequestSerializer
from .permissions import HasProperPermission
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from apps.utils.exceptions import TransactionError


class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50


class Work_OrderCreateViewSet(viewsets.ViewSet):
    queryset = Work_Order.objects.all()

    def create(self, request):
        req_data = request.data
        user_id = request.user.id
        try:
            new_wo = Work_Order.create(user_id, **req_data)
            print('Work order created, about to serialize')
            return Response(Work_OrderSerializer(new_wo).data, status= status.HTTP_201_CREATED)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
        # except Exception as e:
        #     return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

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