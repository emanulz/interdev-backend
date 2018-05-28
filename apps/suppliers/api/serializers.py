# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Supplier
#use the Credit movement model to incorporate in the Supplier the debt
from apps.payables.models import Credit_Movement


class SupplierSerializer(serializers.ModelSerializer):
    debt_to = serializers.SerializerMethodField()
    class Meta:
        model = Supplier
        fields = ('id', 'code', 'name', 'id_type', 'id_num', 'address', 'phone_number', 'cellphone_number', 'email',
                  'agent_name', 'agent_last_name', 'agent_phone_number', 'agent_email', 'bank_accounts',
                  'sinpe_accounts', 'observations', 'created', 'updated', 'debt_to')
    def get_debt_to(self, obj):
        return getSupplierDebtTo(obj.id)


def getSupplierDebtTo(supplier_id):

    movements = Credit_Movement.objects.filter(supplier_id=supplier_id)
    debt = 0
    for movement in movements:
        if(movement.movement_type == 'CRED' and not movement.is_null):
            debt += movement.amount
        elif(movement.movement_type == 'DEBI' and not movement.is_null):
            debt -= movement.amount
    return debt