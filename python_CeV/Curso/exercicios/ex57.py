sexo = str(input('Digite seu Sexo [M/F]: ')).strip().upper()[0]
if sexo not in 'FfMm':
    print('Sexo inválido')
elif sexo == 'm':
    print('Sexo é {}'.format(sexo))
else:
    print('Sexo é {}'.format(sexo))