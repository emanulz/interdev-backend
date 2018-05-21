from django.conf.urls import include, url
from django.urls import path, re_path

#views import
from apps.reporting import views
urlpatterns = [
    re_path(r'(?P<report>\w{2,10})/$', views.generateBDReport)
]

#(r'^user/(?P<username>\w{0,50})/$', views.profile_page,),

#url(r'^warrantyReportBD/(?P<start>(\w*-\w*-\w*))$', views.generateBDReport)