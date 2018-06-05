class Error(Exception):
    pass

class NotEnoughInventory(Error):
    def __init__(self, requested_inv, available_inv):
        self._requested_inv = requested_inv
        self._available_inv = available_inv

    def __str__(self):
        return 'Not enough inventory: requested: {%s}, available: {%s}' % (self._requested_inv, self._available_inv)

class InvalidAmount(Error):
    def __init__(self, amount):
        self._amount = amount

    def __str__(self):
        return 'Invalid amount: %s' % self._amount



