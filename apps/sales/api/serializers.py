# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Sale
from apps.credits.models import Credit_Movement


class SaleSerializer(serializers.ModelSerializer):
    debt = serializers.SerializerMethodField()
    debits = serializers.SerializerMethodField()

    class Meta:
        model = Sale
        fields = ('id', 'bill_number', 'cart', 'client', 'client_id', 'user', 'pay', 'pay_type', 'payed', 'created',
                  'updated', 'debt', 'debits')

    def get_debt(self, obj):
        return getSaleDebt(obj.id)

    def get_debits(self, obj):
        return getSaleDebits(obj.id)


def getSaleDebt(sale_id):

    movements = Credit_Movement.objects.filter(bill_id=sale_id)
    debt = 0
    for movement in movements:
        if movement.movement_type == 'CRED':
            debt += movement.amount
        if movement.movement_type == 'DEBI':
            debt -= movement.amount

    return debt


def getSaleDebits(sale_id):

    movements = Credit_Movement.objects.filter(bill_id=sale_id)
    debits = 0
    for movement in movements:
        if movement.movement_type == 'DEBI':
            debits -= movement.amount

    return debits