# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Tax
from .filters import TaxFilter
from .serializers import TaxSerializer
from .permissions import HasProperPermission


class TaxViewSet(viewsets.ModelViewSet):

    serializer_class = TaxSerializer
    queryset = Tax.objects.all()
    lookup_field = 'id'
    filter_class = TaxFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]
