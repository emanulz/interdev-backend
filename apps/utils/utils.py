from django.db.models import Max
from django.forms.models import model_to_dict
import json
from decimal import Decimal
from django.db import models
import uuid
from datetime import date, datetime

def calculate_next_consecutive(self_cls):
    next_consecutive = self_cls.objects.all().aggregate(Max('consecutive'))['consecutive__max']
    if next_consecutive != None:
        next_consecutive = int(next_consecutive)+1
    else:
        next_consecutive = 1
    return next_consecutive

def dump_object_json(target_object):
    object_dict =  model_to_dict(target_object)
    keys_to_delete = []
    for key in object_dict.keys():
        val = object_dict[key]
        if isinstance(val, Decimal):
            object_dict[key] = str(object_dict[key])
        elif isinstance(val, uuid.UUID):
            object_dict[key] = str(object_dict[key])
        elif isinstance(val, models.fields.files.ImageFieldFile):
            keys_to_delete.append(key)
        elif isinstance(val, date):
            object_dict[key] = str(object_dict[key])
    for key in keys_to_delete:
        del object_dict[key]
    string = json.dumps(object_dict)
    return string
        