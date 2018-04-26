# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Tax


class TaxFilter(django_filters.FilterSet):

    class Meta:
        model = Tax
        fields = ('code', 'name', 'created', 'updated')
