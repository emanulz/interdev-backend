# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Credit_Movement
from ..credit_payment_model import Credit_Payment


class Credit_MovementFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Movement
        fields = ('id', 'consecutive', 'client_id', 'bill_id', 'movement_type', 'amount', 'description', 'created',
                  'updated', 'credit_note_id', 'debit_note_id', 'payment_id')


class Credit_PaymentFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Payment
        fields = ('id', 'consecutive', 'sales', 'user', 'client', 'client_id', 'amount', 'description', 'created',
                  'updated')

class Credit_NoteFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Payment
        fields = '__all__'