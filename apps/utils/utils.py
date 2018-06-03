from django.db.models import Max

def calculate_next_consecutive(self_cls):
    next_consecutive = self_cls.objects.all().aggregate(Max('consecutive'))['consecutive__max']
    next_consecutive = int(next_consecutive)+1
    if(next_consecutive == None): next_consecutive = 1
    return next_consecutive