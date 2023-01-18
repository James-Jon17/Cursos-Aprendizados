from math import hypot
ca = float(input('Digite o cateto adjacente'))
co = float(input('Digite o cateto oposto'))
hi = hypot(ca, co)
print('o valor da hipotenusa é {:.2f}'.format(hi))