# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Sale, Cash_Advance


class SaleFilter(django_filters.FilterSet):

    class Meta:
        model = Sale
        fields = ('id', 'consecutive', 'cart', 'client', 'client_id', 'user', 'pay', 'pay_types', 'sale_type', 'sale_type','sale_total', 'balance', 'created',
                  'updated', 'presale_id')


class Cash_AdvanceFilter(django_filters.FilterSet):

    class Meta:
        model = Cash_Advance
        fields = ('id', 'consecutive', 'client', 'client_id', 'user', 'created', 'amount', 'description', 'work_order_id', 'sale_id', 'updated')
