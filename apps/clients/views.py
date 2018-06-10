# -*- coding: utf-8 -*-

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from apps.clients.models import Client
import json
from django.db import IntegrityError
from ..utils.utils import dump_object_json


# Create your views here.
@login_required
def createClientQuick(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    auto_code = body['autoCode']
    code = body['code']
    if auto_code:
        code = str(getNextNumericCode())
    client = Client(code=code, name=body['name'], last_name=body['last_name'], email=body['email'], id_num='',
                    phone_number=body['phone_number'], cellphone_number='')
    if request.method == 'POST':
        try:
            client.full_clean()
            client.save()
            client_return = dump_object_json(client)
            return HttpResponse(json.dumps({'data': client_return}), content_type='application/json')
        except Exception as e:
            print(type(e))
            if type(e) == IntegrityError:
                return HttpResponse('El código de cliente ya existe', status=400)
            return HttpResponse(str(e), status=400)


def getNextNumericCode():
    clients = Client.objects.all()
    max_code = 0
    for client in clients:
        try:
            if int(client.code) > max_code:
                max_code = int(client.code)
        except Exception as e:
            print(e)
    code = max_code + 1
    return str(code).zfill(4)
