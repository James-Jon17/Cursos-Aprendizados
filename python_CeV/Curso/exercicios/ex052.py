num = int(input('Digite um valor: '))
cont = 0
for c in range(1, num + 1):
    if num % c == 0:
        print('\033[32m', end=' ')
        cont += + 1
    else:
        print('\033[31m', end=' ')
    print('{}'.format(c), end=' ')
print('\n\033[mO numero {} foi dividido {} vezes'.format(num, cont))
if cont == 2:
    print('Seu numero é um numero primo')
else:
    print('Seu numero não é um numero primo')