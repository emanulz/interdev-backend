import xlwt
from django.http import HttpResponse
from .helpers import *



def build():

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
