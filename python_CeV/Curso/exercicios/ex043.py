print('IMC')
peso = float(input('Qual seu peso: '))
altura = float(input('Qual sua altura: '))
formula = peso / (altura * 2)

if formula < 18.5:
    print('Seu IMC é {:.1f} você está abaixo do peso'.format(formula))
elif 18.5 <= formula <= 25:
    print('Seu IMC é {:.1f} você está no peso ideal'.format(formula))
elif 25 <= formula <= 30:
    print('Seu IMC é {:.1f} você está com sobrepeso'.format(formula))
else:
    print('Seu IMC é {:.1f} você está com obesidade morbida'.format(formula))