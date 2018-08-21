from django.utils.crypto import get_random_string

def generateSecretKey(save_location=None):
    chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@$^&*(-_=+)'
    secret_key = get_random_string(50, chars)
    print(secret_key)
    target_loc = "Tax_payer_key.txt"
    if save_location != None:
        target_loc = save_location
    with open(target_loc, 'w+') as destination:
        destination.write(secret_key)

def main():
    generateSecretKey("secret.txt")

if __name__ == '__main__':
    main()
