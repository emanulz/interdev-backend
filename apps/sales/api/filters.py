# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from django_filters import DateFilter
from ..models import Sale, Cash_Advance


class SaleFilter(django_filters.FilterSet):
    start_date = DateFilter(name='created', lookup_expr=('gt'))
    end_date = DateFilter(name='created', lookup_expr=('lt'))

    class Meta:
        model = Sale
        fields = '__all__'


class Cash_AdvanceFilter(django_filters.FilterSet):

    class Meta:
        model = Cash_Advance
        fields = ('id', 'consecutive', 'client', 'client_id', 'user', 'created', 'amount', 'description', 'work_order_id', 'sale_id', 'updated')
