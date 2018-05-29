# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Presale


class PresaleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Presale
        fields = ('id', 'consecutive', 'cart', 'client', 'client_id', 'user', 'created', 'updated', 'closed', 'billed',
                  'is_null')
