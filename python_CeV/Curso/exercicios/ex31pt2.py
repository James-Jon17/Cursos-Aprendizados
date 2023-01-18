print('Jotas Viagem')
distancia = float(input('Quantos Km vai viajar ?: '))
preco = distancia * 0.50 if distancia <= 200 else distancia * 0.45
print('Sua viagem custará {:.2f}R$'.format(preco))