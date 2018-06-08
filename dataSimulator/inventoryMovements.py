import time


def main():
    from apps.products.models import Product
    from apps.inventories.models import Inventory_Movement
    from apps.inventories.models import Warehouse
    import random

    movement_types = ['INPUT', 'OUTPUT']
    for x in range(0, 5):
        product_id = Product.objects.order_by('?').first().id
        amount = random.randint(1, 9)
        warehouse_id = Warehouse.objects.order_by('?').first().id
        movement_type = random.choice(movement_types)
        description = 'test movement for db'

        movement = Inventory_Movement(
          product_id=product_id,
          amount=amount,
          warehouse_id=warehouse_id,
          movement_type=movement_type,
          description=description
        )

        movement.save()


start_time = time.time()
main()
print("--- %s seconds ---" % (time.time() - start_time))
