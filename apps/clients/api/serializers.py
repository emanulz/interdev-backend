# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from apps.credits.models import Credit_Movement
from ..models import Client


class ClientSerializer(serializers.ModelSerializer):
    # debt = serializers.SerializerMethodField()
    class Meta:
        model = Client
        fields = '__all__'

    def get_debt(self, obj):
        return getClientDebt(obj.id)


def getClientDebt(client_id):

    movements = Credit_Movement.objects.filter(client_id=client_id)
    debt = 0
    for movement in movements:
        if movement.movement_type == 'CRED' and not movement.is_null:
            debt += movement.amount
        if movement.movement_type == 'DEBI' and not movement.is_null:
            debt -= movement.amount

    return debt
