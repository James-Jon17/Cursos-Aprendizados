n = int(input('Digite um numero: '))
c = 1
f = 1
for n in range(1, n+1):
    c += 1
    f *= n
    print(n, c, end=' x ')
    print(f)
