import openpyxl as xl
from apps.workshop.models import Work_Order


from django.http import HttpResponse
from .helpers import *

def buildGenSalesReport(**kwargs):
    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename="Reporte Ventas.xlsx"'

    report = createGenSalesReport(start='', end='', day='', month=6, year='')

    report.save(response)
    return response


