n = int(input('Digite o valor: '))
#contador = n
f = 1
for n in range(n, 0, -1):
    print(n, end=' ')
    f *= n
    print(' x ' if n > 1 else ' = ', end=' ')
print(f)
