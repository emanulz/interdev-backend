import time


def main():
    a = 0.00
    b = 1.00
    for x in range(0, 10000000):
        a += b
    print(a)


start_time = time.time()
main()
end_time = time.time()
print("--- %s seconds ---" % (end_time - start_time))
