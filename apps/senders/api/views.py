# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Sender
from .filters import SenderFilter
from .serializers import SenderSerializer

from .permissions import HasProperPermission


class SenderViewSet(viewsets.ModelViewSet):

    serializer_class = SenderSerializer
    queryset = Sender.objects.all()
    lookup_field = 'id'
    filter_class = SenderFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]
