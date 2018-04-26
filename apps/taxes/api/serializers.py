# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Tax


class TaxSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tax
        fields = ('code', 'name', 'created', 'updated')
