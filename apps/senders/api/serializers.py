# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Sender


class SenderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sender
        fields = ('id', 'id_number', 'name', 'commercial_name', 'phone_number', 'fax_number', 'province',
                  'canton', 'district', 'town', 'other_address', 'email', 'pin', 'user', 'password', 'default',
                  'created', 'updated')
