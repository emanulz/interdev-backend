# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Client
from .filters import ClientFilter
from .serializers import ClientSerializer
from .permissions import HasProperPermission
from rest_framework.response import Response
from rest_framework import status
from apps.utils.exceptions import TransactionError

class ClientViewSet(viewsets.ModelViewSet):

    serializer_class = ClientSerializer
    queryset = Client.objects.all()
    lookup_field = 'id'
    filter_class = ClientFilter

    def retrieve(self, request, *args, **kwargs):

        user_id = request.user.id

        try:
            client, vouchers = Client.getClientAndRelated(user_id, kwargs["id"])
            return Response(data={'client':ClientSerializer(client).data, 'credit_vouchers': vouchers}, status=status.HTTP_200_OK)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]
