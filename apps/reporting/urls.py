from django.conf.urls import include, url
from django.urls import path, re_path

#views import
from apps.reporting import views
urlpatterns = [
    re_path(r'(?P<report>\w{2,20})/$', views.generateReports)
]
