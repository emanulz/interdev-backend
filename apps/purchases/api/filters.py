from __future__ import unicode_literals

import django_filters
from ..models import Purchase

class PurchaseFilter(django_filters.FilterSet):

    class Meta:
        model = Purchase
        fields = '__all__'
