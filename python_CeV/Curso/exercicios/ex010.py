print('Quantos dolas você consegue comprar')
seuValor = float(input('Digite seu valor = '))
dolar = float(seuValor / 5.29)
vdolar = float(seuValor * 5.29)
print('Com {}R$, você consegue comprar {}$ dolares'.format(round(seuValor, 4), round(dolar, 2)))
print('Com {:.2f}US$, você consegue comprar {:.2f}R$'.format(seuValor, vdolar))
#round arredonda o numero
#melhor usar o :.2f
