print('Jotas Viagem')
distancia = float(input('Quantos Km vai viajar ?: '))
if distancia <= 200:
    preco = distancia * 0.50
else:
    preco = distancia * 0.45
print('Sua viagem vai custar {:.2f}R$'.format(preco))
