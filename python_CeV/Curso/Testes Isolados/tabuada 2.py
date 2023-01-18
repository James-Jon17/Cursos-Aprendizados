num = int(input('Tabuada de: '))
cont = 0
for n in range(1, 11):
        cont += +1
        r = n - num
        if num - n == -1:
            print('{} - {} = {}'.format(cont, num, r))