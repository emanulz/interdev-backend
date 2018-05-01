# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from apps.credits.models import Credit_Movement
from ..models import Client


class ClientSerializer(serializers.ModelSerializer):
    debt = serializers.SerializerMethodField()

    class Meta:
        model = Client
        fields = ('id', 'code', 'name', 'last_name', 'id_type', 'id_num', 'phone_number', 'cellphone_number',
                  'province', 'canton', 'district', 'town', 'other_address', 'email', 'pred_discount', 'max_discount',
                  'max_line_discount', 'pays_taxes', 'has_credit', 'credit_limit', 'credit_days', 'observations',
                  'client_type', 'created', 'updated', 'debt')

    def get_debt(self, obj):
        return getClientDebt(obj.id)


def getClientDebt(client_id):

    movements = Credit_Movement.objects.filter(client_id=client_id)
    debt = 0
    for movement in movements:
        if movement.movement_type == 'CRED':
            debt += movement.amount
        if movement.movement_type == 'DEBI':
            debt -= movement.amount

    return debt
