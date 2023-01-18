soma = 0
cont = 0
for c in range(1, 501, 2):
    if c % 3 == 0:
        soma = c + soma
        cont += +1
print('foram {}, e a soma dele é  {}'.format(cont, soma))