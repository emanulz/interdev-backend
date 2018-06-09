import django_filters

from ..models import Credit_Voucher, Money_Return

class SearchCredit_VoucherFilter(django_filters.FilterSet):

    class Meta:
        model = Credit_Voucher
        fields = '__all__'

class SearchMoney_ReturnFilter(django_filters.FilterSet):

    class Meta:
        model = Money_Return
        fields = '__all__'