# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Sender


class SenderFilter(django_filters.FilterSet):

    class Meta:
        model = Sender
        fields = ('id', 'id_number', 'name', 'commercial_name', 'phone_number', 'fax_number', 'province',
                  'canton', 'district', 'town', 'other_adress', 'email', 'pin', 'user', 'password', 'created',
                  'updated')
