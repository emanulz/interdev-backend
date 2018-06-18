from rest_framework import viewsets

from ..models import Work_Order, Labor, UsedPart, PartRequest
from .filters import Work_OrderFilter, LaborFilter, UsedPartFilter, PartRequestFilter
from .serializers import Work_OrderSerializer, LaborSerializer, UsedPartSerializer, PartRequestSerializer
from apps.sales.api.serializers import Cash_AdvanceSerializer
from .permissions import HasProperPermission
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from apps.utils.exceptions import TransactionError
from rest_framework.decorators import detail_route


class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50


class Work_OrderCreateViewSet(viewsets.ViewSet):
    queryset = Work_Order.objects.all()


    def create(self, request):
        req_data = request.data
        user_id = request.user.id
        try:
            new_wo = Work_Order.create(user_id, **req_data)
            serialized_cash = []
            for cash in cash_advances:
                serialized_cash.append(
                    Cash_AdvanceSerializer(cash).data
                )
            return_data = {}
            return_data['work_order'] = Work_OrderSerializer(new_wo).data
            return_data['cash_advances'] = serialized_cash
            print("Return data sever side")
            print(return_data)
            return Response(data= return_data, status= status.HTTP_201_CREATED)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
        # except Exception as e:
        #     return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)
    

    @detail_route(methods=('post',))
    def patch_workview(self, request, pk):
        req_data = request.data
        user_id = request.user.id
        try:
            new_wo, cash_advances, labor, used = Work_Order.patch_workview(pk, user_id, **req_data)
            serialized_cash = []
            for cash in cash_advances:
                serialized_cash.append(
                    Cash_AdvanceSerializer(cash).data
                )
            return_data = {}
            return_data['work_order'] = Work_OrderSerializer(new_wo).data
            return_data['cash_advances'] = serialized_cash
            return_data['labor_objects'] = LaborSerializer(labor, many=True).data
            return_data['used_objects'] = UsedPartSerializer(used, many=True).data

            return Response(data= return_data, status= status.HTTP_201_CREATED)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)

class Work_OrderViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = Work_OrderSerializer
    queryset = Work_Order.objects.all()
    lookup_field = 'id'
    filter_class = Work_OrderFilter
    pagination_class = LimitPaginationClass

    def retrieve(self, request, *args, **kwargs):
        user_id = request.user.id

        try:
            wo, cash_advance, labor, used = Work_Order.getWorkOrderAndRelated(user_id, kwargs["id"])
            return_data = {}
            return_data['work_order'] = Work_OrderSerializer(wo).data
            return_data['cash_advances'] = Cash_AdvanceSerializer(cash_advance, many=True).data
            return_data['labor_objects'] = LaborSerializer(labor, many=True).data
            return_data['used_objects'] = UsedPartSerializer(used, many=True).data
            return Response(data=return_data, status=status.HTTP_200_OK)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)


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