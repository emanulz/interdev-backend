from dynamic_preferences.registries import global_preferences_registry
from django.conf import settings
from django.utils import timezone
from datetime import datetime, timedelta

global_preferences = global_preferences_registry.manager()

def getCreditExpiryDate(invoice_date, credit_days):

    return invoice_date + timedelta(days=credit_days)


def getCompanyName():
    return global_preferences['company__comercial_name']

def convertToLocalTimezone(time_stamp, as_String= True):
    if as_String:
        return str(timezone.localtime(time_stamp)).split('.')[0]
    return timezone.localtime(time_stamp)

def getTimeZone():
    return settings.TIME_ZONE


def adjustSheetColsWidth(ws):
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

def writeRows(data_body, ws, start_row, start_col):
    current_row = start_row
    current_col = start_col

    for data_row in data_body:
        for i in range(0,len(data_row)):
            ws.cell(row=current_row, column=current_col+i, value=data_row[i])
        current_row += 1
        current_col = 1
    #return the new current_row and the current col as the starting col
    return (current_row, start_col)