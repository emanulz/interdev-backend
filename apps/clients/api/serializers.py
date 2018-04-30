# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Client


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ('id', 'code', 'name', 'last_name', 'id_type', 'id_num', 'phone_number', 'cellphone_number',
                  'province', 'canton', 'district', 'town', 'other_address', 'email', 'pred_discount', 'max_discount',
                  'max_line_discount', 'pays_taxes', 'has_credit', 'credit_limit', 'credit_days', 'observations',
                  'client_type', 'created', 'updated')
