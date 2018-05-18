from django.shortcuts import render
from django.http import HttpResponse
from .reports.bdreport import build


def generateBDReport(request):
    response = build()
    return response
