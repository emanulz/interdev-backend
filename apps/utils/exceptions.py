from django.core.exceptions import ValidationError
from django.db.utils import IntegrityError
class TransactionError(IntegrityError):
    def __init__(self, errors):
        self._errors = errors

        
    def get_errors(self):
        return self._errors

class err():
    def __init__(self, mess):
        self.message = mess