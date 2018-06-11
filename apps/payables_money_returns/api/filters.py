import django_filters

from ..models import Credit_Voucher

class SearchCredit_Voucher(django_filters.FilterSet):

    class Meta:
        model = Credit_Voucher
        fields = '__all__'

