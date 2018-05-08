# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Credit_Movement, Credit_Payment


class Credit_MovementFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Movement
        fields = ('id', 'movement_number', 'client_id', 'bill_id', 'movement_type', 'amount', 'description', 'created',
                  'updated', 'credit_note_id', 'debit_note_id', 'payment_id', 'is_null')


class Credit_PaymentFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Payment
        fields = ('id', 'payment_number', 'sales', 'user', 'client', 'client_id', 'amount', 'description', 'created',
                  'updated', 'is_null')
