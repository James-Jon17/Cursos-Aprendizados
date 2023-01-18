print('Converta Celsius em Fahrenheit')
grausC = float(input('Qual a temperatua atual'))
#fah = float((graus * 9 / 5) + 32)

grausF = grausC * 1.8 + 32
print('Sua temperatura em {}C convertida para fah, fica {:.1f}F'.format(grausC, grausF))