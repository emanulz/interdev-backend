from django.shortcuts import render
from django.http import HttpResponse


def generateBDReport(request):
    return HttpResponse("Warranty report route")
