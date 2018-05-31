from rest_framework import serializers
from ..models import Purchase
from apps.payables.models import Credit_Movement

class PurchaseSerializer(serializers.ModelSerializer):
    debt_data = serializers.SerializerMethodField()

    class Meta:
        model = Purchase
        fields = ('id', 'consecutive', 'user', 'supplier_id', 'supplier', 'cart', 'pay', 'pay_type','is_closed',
                'payed', 'invoice_number', 'invoice_date', 'credit_days', 'created', 'updated',
                'warehouse', 'warehouse_id', 'debt_data')


    def get_debt_data(self, obj):
        return getPurchaseDebtData(obj.id)

def getPurchaseDebt(purchase_id):
    
    movements = Credit_Movement.objects.filter(purchase_id=purchase_id)
    debt = 0
    for movement in movements:
        if movement.movement_type =='CRED' and not movement.is_null:
            debt -= movement.amount
        elif(movement.movement_type =='DEBI' and not movement.is_null):
            debt += movement.amount
    return debt

def  getPurchaseDebtData(purchase_id):
    credit = 0
    debit = 0
    movements = Credit_Movement.objects.filter(purchase_id=purchase_id) 
    for movement in movements:
        if movement.is_null:
            continue
        if movement.movement_type =='CRED':
            credit += movement.amount
        else:
            debit += movement.amount
    return {'debt': credit - debit, 'credits': credit, 'debits':debit}
