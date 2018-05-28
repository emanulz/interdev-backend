from __future__ import unicode_literals

import django_filters
from ..models import Purchase

class PurchaseFilter(django_filters.FilterSet):

    class Meta:
        model = Purchase
        fields = ('id', 'consecutive', 'user', 'supplier', 'cart', 'pay', 'pay_type', 'is_closed',
                'payed', 'invoice_number', 'invoice_date', 'credit_days', 'created', 'updated',
                'warehouse', 'warehouse_id')
