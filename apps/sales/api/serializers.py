# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Sale, Cash_Advance
from apps.credits.models import Credit_Movement


class Cash_AdvanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cash_Advance
        fields = ('id', 'consecutive', 'client', 'client_id', 'user', 'created', 'amount', 'description',
                  'work_order_id', 'sale_id', 'updated')


class SaleSerializer(serializers.ModelSerializer):
    debt = serializers.SerializerMethodField()
    debits = serializers.SerializerMethodField()
    credits = serializers.SerializerMethodField()

    class Meta:
        model = Sale
        fields = ('id', 'consecutive', 'cart', 'client', 'client_id', 'user', 'pay', 'pay_type', 'payed', 'created',
                  'updated', 'debt', 'debits', 'credits')

    def get_debt(self, obj):
        return getSaleDebt(obj.id)

    def get_debits(self, obj):
        return getSaleDebits(obj.id)

    def get_credits(self, obj):
        return getSaleCredits(obj.id)


def getSaleDebt(sale_id):

    movements = Credit_Movement.objects.filter(bill_id=sale_id)
    debt = 0
    for movement in movements:
        if movement.movement_type == 'CRED' and not movement.is_null:
            debt += movement.amount
        if movement.movement_type == 'DEBI' and not movement.is_null:
            debt -= movement.amount

    return debt


def getSaleDebits(sale_id):

    movements = Credit_Movement.objects.filter(bill_id=sale_id)
    debits = 0
    for movement in movements:
        if movement.movement_type == 'DEBI' and not movement.is_null:
            debits += movement.amount

    return debits


def getSaleCredits(sale_id):

    movements = Credit_Movement.objects.filter(bill_id=sale_id)
    credits = 0
    for movement in movements:
        if movement.movement_type == 'CRED' and not movement.is_null:
            credits += movement.amount

    return credits
