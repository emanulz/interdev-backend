# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Presale


class PresaleFilter(django_filters.FilterSet):

    class Meta:
        model = Presale
        fields = ('id', 'consecutive', 'cart', 'client', 'client_id', 'user', 'created', 'updated', 'closed', 'billed',
                  'is_null', 'sale_id')
