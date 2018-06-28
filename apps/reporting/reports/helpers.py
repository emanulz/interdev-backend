from apps.sales.models import Sale
import datetime
from openpyxl import Workbook
from openpyxl.styles import colors
from openpyxl.styles import Font, Color
import json

REPORTE_VENTAS = {
    0: 'Ventas Contado',
    1: 'Ventas Crédito',
    2: 'Abonos',
    3: 'Notas Crédito',
    4: 'Productos',
    5: 'Adelantos',
    6: 'Cierres de Taller',
}

COMPANY_NAME = 'Repuestos Juanca'

def createGenSalesReport(start, end, day, month, year):
    print("Create gen sales report entry point")

    #declare the names of the worksheets to be created
    wb = Workbook()
    
    today = datetime.date.today()


    print("Today --> ", today)
    report_period_type = None
    if start!='' and end!='':
        report_period_type='date_range'
    elif day!='':
        report_period_type ='day'
    elif month!='':
        report_period_type = "month"
    elif year != '':
        report_period_type = "year"
    
    target_sales = None
    if report_period_type == 'day':
        target_sales =  Sale.objects.filter(created__lt=today, created__gt=today)
    elif report_period_type == "month":
        print("By Month")
        print(today.month)
        target_sales = Sale.objects.filter(created__month = today.month)
    elif report_period_type == "year":
        target_sales = Sale.objects.filter(created__year=today.year)
    elif report_period_type == "date_range":
        print("date range report")

    #separate the sales into the different reports that belong to
    cash_sales = []
    cred_sales = []

    for sale in target_sales:
        if sale.sale_type == 'CASH':
            cart_data =  json.loads(sale.cart)
            cash_sales.append((sale, cart_data))
        else:
            cart_data =  json.loads(sale.cart)
            cred_sales.append((sale, cart_data))
    


    createCashSalesReport(cash_sales, wb)
    createCreditSalesReport(cred_sales, wb)
    createProductMovementReport(cash_sales, cred_sales, wb)
    return wb

def createProductMovementReport(target_sales_cash, target_sales_cred, wb, sheet_index = 4):

    current_row = 1
    current_col = 1
    header_labels = ['Código', 'Descripción', 'Unidades', 'Subtotal', 'Descuento', 'Impuesto', 'Total']

    ws = wb.create_sheet(title=REPORTE_VENTAS[sheet_index])

    #add a simple title
    ws.cell(row=current_row, column=current_col, value=COMPANY_NAME)
    current_row+=1
    #write the date
    now = datetime.datetime.now()
    ws.cell(row=current_row, column=current_col, value=now)
    current_row+=1
    #write the report type
    ws.cell(row=current_row, column=current_col, value="REPORTE FACTURACIÓN DE CRÉDITO")
    current_row+=2

    #write the header
    for i in range(0,len(header_labels)):
        temp_cell = ws.cell(row=current_row, column=current_col+i, value=header_labels[i])
        temp_cell.font = Font(bold=True, name="Tahoma", size=8)
    #reset the col position
    current_col = 1
    current_row+=1

    data_body = []
    total_subtotal = 0
    total_discount = 0
    total_tax = 0
    total_total = 0
    for element in (target_sales_cash + target_sales_cred):
        for item in element[1]['cartItems']: #each cart can have many items
            temp_row = []
            #get item code
            temp_row.append(item['product']['code'])
            #get item description
            temp_row.append(item['product']['description'])
            #get item qty
            temp_row.append(round(item['qty'], 2))
            #get item subtotal
            temp_subtotal = item['subTotalNoDiscount']
            total_subtotal += temp_subtotal
            temp_row.append(round(temp_subtotal, 2))
            #get item discount
            temp_discount = item['subTotalNoDiscount']-item['subtotal']
            total_discount += temp_discount
            temp_row.append(round(temp_discount, 2))
            #get item tax
            temp_tax = item['totalWithIv']-item['subtotal']
            total_tax += temp_tax
            temp_row.append(round(total_tax, 2))
            #get item total
            temp_total = item['totalWithIv']
            total_total += temp_total
            temp_row.append(round(temp_total, 2))
            data_body.append(temp_row)

    for data_row in data_body:
        for i in range(0,len(data_row)):
            temp_cell = ws.cell(row=current_row, column=current_col+i, value=data_row[i])
        current_row += 1
        current_col = 1
        
    current_col = 3
    current_row += 2
    totals_legend_cell = ws.cell(row=current_row, column=current_col, value="Totales-->")
    totals_legend_cell.font = Font(bold=True, name="Tahoma", size=8)
    current_col+=1

    #add the subtotal
    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_subtotal,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_discount,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_tax,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1
    
    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_total,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    for col in ws.columns:
        max_length = 0
        column = col[0].column # Get the column name
        for cell in col:
            try: # Necessary to avoid error on empty cells
                if len(str(cell.value)) > max_length:
                    max_length = len(cell.value)
            except:
                pass
        adjusted_width = (max_length + 2) * 1.2
        ws.column_dimensions[column].width = adjusted_width

def createCashSalesReport(target_sales, wb, sheet_index = 0):

    current_row = 1
    current_col = 1
    header_labels = ['# Factura', 'Cliente', 'Subtotal', 'Descuento', 'Impuestos', 'Total', 'Fecha Venta' ]

    wb._active_sheet_index =  sheet_index
    #get the first sheet, created per default
    ws = wb.active
    #change the title of the sheet
    ws.title = REPORTE_VENTAS[0]

    #add a simple title
    ws.cell(row=current_row, column=current_col, value=COMPANY_NAME)
    current_row+=1
    #write the date
    now = datetime.datetime.now()
    ws.cell(row=current_row, column=current_col, value=now)
    current_row+=1
    #write the report type
    ws.cell(row=current_row, column=current_col, value="REPORTE FACTURACIÓN DE CONTADO")
    current_row+=2
    #write the header
    for i in range(0,len(header_labels)):
        temp_cell = ws.cell(row=current_row, column=current_col+i, value=header_labels[i])
        temp_cell.font = Font(bold=True, name="Tahoma", size=8)
    #reset the col position
    current_col = 1
    current_row+=1
    data_body = []
    total_subtotal = 0
    total_discount = 0
    total_tax = 0
    total_total = 0
    for element in target_sales:
        temp_row = []
        #add invoice number
        temp_row.append(element[0].consecutive)
        #get client data
        client = json.loads(element[0].client)
        temp_row.append("{} {}".format(client['name'], client['last_name']) )
        #get invoice subtotal
        tempt_subtotal = element[1]['cartSubtotalNoDiscount']
        total_subtotal += tempt_subtotal
        temp_row.append(round(tempt_subtotal,2))
        #get the discount
        temp_discount = element[1]['discountTotal']
        total_discount += temp_discount
        temp_row.append(round(temp_discount,2))
        #get the total taxes
        temp_taxes = element[1]['cartTaxes']
        total_tax += temp_taxes
        temp_row.append(round(temp_taxes,2))
        #get the total
        temp_total = element[0].sale_total
        total_total += temp_total
        temp_row.append(round(temp_total,2))
        #get the sale time
        temp_row.append(element[0].created)
        data_body.append(temp_row)

    for data_row in data_body:
        for i in range(0,len(data_row)):
            temp_cell = ws.cell(row=current_row, column=current_col+i, value=data_row[i])
        current_row += 1
        current_col = 1
    #calculate the totals
    current_col = 2
    current_row += 2
    totals_legend_cell = ws.cell(row=current_row, column=current_col, value="Totales-->")
    totals_legend_cell.font = Font(bold=True, name="Tahoma", size=8)
    current_col+=1
    #add the subtotal
    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_subtotal,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_discount,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_tax,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1
    
    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_total,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1


    for col in ws.columns:
        max_length = 0
        column = col[0].column # Get the column name
        for cell in col:
            try: # Necessary to avoid error on empty cells
                if len(str(cell.value)) > max_length:
                    max_length = len(cell.value)
            except:
                pass
        adjusted_width = (max_length + 2) * 1.2
        ws.column_dimensions[column].width = adjusted_width


def createCreditSalesReport(target_sales, wb, sheet_index = 1):

    current_row = 1
    current_col = 1
    header_labels = ['# Factura', 'Cliente', 'Subtotal', 'Descuento', 'Impuestos', 'Total', 'Fecha Venta' ]    

    ws = wb.create_sheet(title=REPORTE_VENTAS[sheet_index])

    #add a simple title
    ws.cell(row=current_row, column=current_col, value=COMPANY_NAME)
    current_row+=1
    #write the date
    now = datetime.datetime.now()
    ws.cell(row=current_row, column=current_col, value=now)
    current_row+=1
    #write the report type
    ws.cell(row=current_row, column=current_col, value="REPORTE FACTURACIÓN DE CRÉDITO")
    current_row+=2

    #write the header
    for i in range(0,len(header_labels)):
        temp_cell = ws.cell(row=current_row, column=current_col+i, value=header_labels[i])
        temp_cell.font = Font(bold=True, name="Tahoma", size=8)
    #reset the col position
    current_col = 1
    current_row+=1
    data_body = []
    total_subtotal = 0
    total_discount = 0
    total_tax = 0
    total_total = 0

    for element in target_sales:
        temp_row = []
        #add invoice number
        temp_row.append(element[0].consecutive)
        #get client data
        client = json.loads(element[0].client)
        temp_row.append("{} {}".format(client['name'], client['last_name']) )
        #get invoice subtotal
        tempt_subtotal = element[1]['cartSubtotalNoDiscount']
        total_subtotal += tempt_subtotal
        temp_row.append(round(tempt_subtotal,2))
        #get the discount
        temp_discount = element[1]['discountTotal']
        total_discount += temp_discount
        temp_row.append(round(temp_discount,2))
        #get the total taxes
        temp_taxes = element[1]['cartTaxes']
        total_tax += temp_taxes
        temp_row.append(round(temp_taxes,2))
        #get the total
        temp_total = element[0].sale_total
        total_total += temp_total
        temp_row.append(round(temp_total,2))
        #get the sale time
        temp_row.append(element[0].created)
        data_body.append(temp_row)

    for data_row in data_body:
        for i in range(0,len(data_row)):
            temp_cell = ws.cell(row=current_row, column=current_col+i, value=data_row[i])
        current_row += 1
        current_col = 1
    #calculate the totals
    current_col = 2
    current_row += 2
    totals_legend_cell = ws.cell(row=current_row, column=current_col, value="Totales-->")
    totals_legend_cell.font = Font(bold=True, name="Tahoma", size=8)
    current_col+=1
    #add the subtotal
    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_subtotal,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_discount,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1

    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_tax,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1
    
    temp_cell = ws.cell(row=current_row, column=current_col, value=round(total_total,2))
    temp_cell = Font(bold=True, name="Tahoma", size=8)
    current_col +=1


    for col in ws.columns:
        max_length = 0
        column = col[0].column # Get the column name
        for cell in col:
            try: # Necessary to avoid error on empty cells
                if len(str(cell.value)) > max_length:
                    max_length = len(cell.value)
            except:
                pass
        adjusted_width = (max_length + 2) * 1.2
        ws.column_dimensions[column].width = adjusted_width