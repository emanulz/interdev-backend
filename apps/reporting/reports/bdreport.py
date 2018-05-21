import xlwt
import openpyxl as xl
from apps.workshop.models import Work_Order


from django.http import HttpResponse
from .helpers import *

def build(**kwargs):
    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename="Reporte Garantías.xlsx"'

    work_orders = None
    if(kwargs.keys().__contains__('month')):
        #get the month anc check its valid
        month_string = kwargs.get('month', '')
        try:
            val = int(month_string)
            if(val < 0 or val>11):
                raise ValueError
        except:
            return HttpResponse('INVALID PARAMETERS')
        work_orders = Work_Order.objects.filter(created__month=month_string)
        print(work_orders)
    else:
        print('date range based report')
        

    report = xl.Workbook()

    report.save(response)
    return response

def buildXls():

    response = HttpResponse(content_type='application/vnd.ms-excel')
    response['Content-Disposition'] = 'attachment; filename="test.xls"'

    report = xlwt.Workbook(encoding='utf-8')
    sheet1 = report.add_sheet('Garantías')

    #variables to track the current row in the sheet
    row_number = 0

    header_style = xlwt.XFStyle()
    body_style = xlwt.XFStyle()

    #buildBackground(header_style)
    #buildFont(header_style)

    columns = ['Código', 'Cantidad', 'Descripción', 'Tipo', 'Estado', 'Pagada']

    #write the header
    for col_number in range(len(columns)):
        sheet1.write(row_number, col_number, columns[col_number], header_style)
    
    report.save(response)
    return response
