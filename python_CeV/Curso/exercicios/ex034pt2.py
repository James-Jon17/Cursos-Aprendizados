salario = float(input('Digite o valor do seu salário atual: '))
if salario <= 1250:
    novo = salario + (salario * 0.15)
else:
    novo = salario + (salario * 0.10)
print('Quem ganhava {}R${:.2f}{} passa a ganhar {}R${:.2f}{} agora'.format('\033[31m', salario, '\033[m', '\033[32m', novo, '\033[m'))