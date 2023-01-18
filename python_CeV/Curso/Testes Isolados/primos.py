num = int(input('Digite um número: '))
mult = 0
for c in range(1, num + 1):
    if num % c ==0:
        print('\033[32m', end=' ')
        mult += 1
    else:
        print('\033[31m', end=' ')
    print(c, end=' ')
print('\033[m\nO {} foi dividido {} vezes'.format(num, mult))
if mult == 2:
    print('Seu numero é Primo')
else:
    print('Seu numero não é primo')