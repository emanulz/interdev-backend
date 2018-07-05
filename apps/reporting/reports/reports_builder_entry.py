import openpyxl as xl
from workshop.models import Work_Order
#from apps.workshop.models import Work_Order
from datetime import datetime


from django.http import HttpResponse
from .helpers import createGenSalesReport, createInventoryValueReport

def buildGenSalesReport(**kwargs):
    now = datetime.now()
    report_name = "Reporte Ventas_{}-{}-{}.xlsx".format(now.year, now.month, now.day)
    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(report_name)
    
    report = createGenSalesReport(start=kwargs['start'], end=kwargs['end'], 
        day=kwargs['day'], month=kwargs['month'], year=kwargs['year'])

    report.save(response)
    return response


def buildInvValueReport(**kwargs):
    now = datetime.now()
    report_name = "Reporte Valoración_Inventario_{}-{}-{}.xlsx".format(now.year, now.month, now.day)

    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(report_name)

    report = createInventoryValueReport(target_warehouses=kwargs['warehouses'])
    
    report.save(response)
    return response