from datetime import date

nasc = int(input('Ano de nascimento: '))
data = date.today().year
idade = data - nasc
print('O atleta tem {} anos'.format(idade))
if idade <= 9:
    print('Classificação: MIRIM')
elif idade <= 14:
    print('Classificação: Infantil')
elif idade <= 19:
    print('Classificação: Júnior')
elif idade <= 25:
    print('Classificação: Sênior')
else:
    print('Classificação: Master')