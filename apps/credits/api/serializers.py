# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Credit_Movement, Credit_Note
from ..credit_payment_model import Credit_Payment


class Credit_MovementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Movement
        fields = ('id', 'consecutive', 'client_id', 'bill_id', 'movement_type', 'amount', 'description', 'created',
                  'updated', 'credit_note_id', 'debit_note_id', 'payment_id')


class Credit_PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Payment
        fields = ('id', 'consecutive', 'sales', 'user', 'client', 'client_id', 'amount', 'description', 'created',
                  'updated')


class Credit_NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Note
        fields = '__all__'
