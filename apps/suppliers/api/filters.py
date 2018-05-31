# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Supplier

import django_filters

class SupplierFilter(django_filters.FilterSet):
    
    phone_number = django_filters.CharFilter(lookup_expr='icontains')
    created = django_filters.DateFilter(name='created', lookup_expr='year')
    created__gt = django_filters.DateFilter(name='created_gt', lookup_expr='year__gt')
    
    class Meta:
        model = Supplier
        fields = ('id', 'code', 'name', 'id_type', 'id_num', 'address', 'phone_number', 'cellphone_number', 'email',
                  'agent_name', 'agent_last_name', 'agent_phone_number', 'agent_email', 'created', 'updated')


