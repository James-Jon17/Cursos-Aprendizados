altura = float(input('Digite a altura: '))
largura = float(input('Digite a largura: '))
area = largura * altura
tinta = area / 2
print('Sua parede tem a dimesao de {}x{}, sua área é de {}m²'.format(altura, largura, area))
print('Você precisará de {}l de tinta'.format(tinta))