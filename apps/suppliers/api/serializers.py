# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Supplier
#use the Credit movement model to incorporate in the Supplier the debt
from apps.payables.models import Credit_Movement


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'
