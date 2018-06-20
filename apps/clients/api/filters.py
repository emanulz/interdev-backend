# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Client, ClientCategory


class ClientFilter(django_filters.FilterSet):

    class Meta:
        model = Client
        fields = '__all__'


class ClientCategoryFilter(django_filters.FilterSet):

    class Meta:
        model = ClientCategory
        fields = '__all__'
