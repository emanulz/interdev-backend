from django.conf.urls import include, url

#views import
from apps.reporting import views

urlpatterns = [
    url(r'^warrantyReportBD/', views.generateBDReport)
]