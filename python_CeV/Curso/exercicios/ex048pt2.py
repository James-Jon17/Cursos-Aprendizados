soma = 0
cont = 0
for c in range(1, 501, 2):
    if c % 3 == 0:
        soma += c
        cont += + 1 #conta todos o valores impar dentro da iteraçao
print('A soma de todos os {} valores é {}'.format(cont, soma))
