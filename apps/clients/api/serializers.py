# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Client, ClientCategory


class ClientSerializer(serializers.ModelSerializer):
    # debt = serializers.SerializerMethodField()
    class Meta:
        model = Client
        fields = '__all__'


class ClientCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ClientCategory
        fields = '__all__'
