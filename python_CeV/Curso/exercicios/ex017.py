cOposto = float(input('digite o cateto oposto'))
cAdjacente = float(input('digite o cateto adjacente'))

hipotenusa = (cAdjacente ** 2 + cOposto ** 2) ** (1/2)

print('O valor da hipotenusa é {:.2f}'.format(hipotenusa))
