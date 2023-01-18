print('Jotas Viagem')
distancia = float(input('Quantos Km vai viajar ?: '))
custo = distancia * 0.50
custo2 = distancia * 0.45
if distancia <= 200:
    print('Sua viagem de {}Km, vai custar {:.2f}R$'.format(distancia, custo))
elif distancia > 200:
    print('Sua viagem de {}km, vai custa {:.2f}R$'.format(distancia, custo2))
