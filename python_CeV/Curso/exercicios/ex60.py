n = int(input('Digite um numero: '))
c = n
f = 1
print('Calculando {}!: '.format(n), end='')
while c > 0:
    print('{}'.format(c), end=' ')
    f *= c
    c -= 1
    print(' x ' if c > 0 else ' = ', end='')
print('{}'.format(f))