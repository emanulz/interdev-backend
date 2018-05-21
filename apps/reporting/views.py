from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from .reports.bdreport import build


@csrf_exempt
def generateBDReport(request, report =''):

    #depending on the request method, the data for the report will come
    #from the request or will be obtained internally
    if request.method == 'GET':
        #defines the action path according to the report type
        action = {
            'warrantybd': build
        }
        #holds the data necessary to make the report
        report_kwargs = {
            'month': request.GET.get('month', ''),
            'start': request.GET.get('start', ''),
            'end': request.GET.get('end', ''),
            'closed': request.GET.get('closed', False)

        }

        #process the request data
        response = action[report](**report_kwargs)


    elif request.method == 'POST':
        response = HttpResponse('POST report request')

    
    return response
