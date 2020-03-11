from django.http import HttpResponse

def no_license(request):
    html = "<html><body>La licencia ha sido suspendida. Consulte al administrador del sistema.</body></html>"
    return HttpResponse(html)