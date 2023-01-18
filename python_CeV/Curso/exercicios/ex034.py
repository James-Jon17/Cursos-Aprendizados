print('Aumento percentual salarial')
salario = float(input('Qual seu salario'))
aumento10 = salario * 0.10 + salario
aumento15 = salario * 0.15 + salario
if salario <= 1250:
    print('Seu salario é de  R${:.2f} com aumento de 15% passara a ser R${:.2f} '.format(salario, aumento15))
else:
    print('Seu salario é de R${:.2f} com aumento de 10% passará a ser R${:.2f}'.format(salario, aumento10))
