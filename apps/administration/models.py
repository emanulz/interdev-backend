# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


class Administration(models.Model):
    pass


try:
    content_type = ContentType.objects.get_for_model(Administration)
    permission = Permission.objects.create(
        codename='access_administration',
        name='Can access Administration',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass
