from datetime import date

print('Alistamento Militar')
nasc = int(input('em que ano você nasceu: '))
data = date.today().year
idade = data - nasc
print('Quem nasceu em {} tem {} em {}'.format(nasc, idade, data))
if idade == 18:
    print('Precisa se alistar ainda este ano')
elif idade < 18:
    saldo = 18 - idade
    print('Faltam {} anos para você se alistar'.format(saldo))
    anu = data + saldo
    print('Você vai se alista em {}'.format(anu))
else:
    saldo = idade - 18
    print('Já passou o tempo do alistamento!')
    anu = data - saldo
    print('Você deveria se alista em {}'.format(anu))