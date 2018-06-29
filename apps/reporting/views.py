from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from .reports.reports_builder_entry import buildGenSalesReport, buildInvValueReport


@csrf_exempt
def generateReports(request, report =''):

    #depending on the request method, the data for the report will come
    #from the request or will be obtained internally
    if request.method == 'GET':
        #defines the action path according to the report type
        action = {
            'generalsales':buildGenSalesReport,
            'invvalue': buildInvValueReport,
        }
        #holds the data necessary to make the report
        report_kwargs = {
            'day': request.GET.get('day', ''),
            'month': request.GET.get('month', ''),
            'year': request.GET.get('year', ''),
            'start': request.GET.get('start', ''),
            'end': request.GET.get('end', ''),
            'closed': request.GET.get('closed', False),
            'warehouses': request.GET.get('warehouses', ''),
        }

        print("Report kwargs --> ")
        print(report_kwargs)

        #process the request data
        print("Report --> " +  report)
        response = action[report](**report_kwargs)

    elif request.method == 'POST':
        response = HttpResponse('POST report request')

    return response
