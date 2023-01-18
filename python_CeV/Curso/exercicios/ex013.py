print('Você recebeu um aumento fixo de 15%, vamos descobrir quanto sua renda vai aumentar ?')
salario = float(input('Digite o valor do seu sálario atual = '))
aumento = salario + (salario * 0.15)
#aumento2 = aumento + salario
aumento3 = salario * 0.15
print('Seu salario vai ficar {:.2f}R$'. format(aumento))
print(f'Seu aumento foi de {aumento3}')
