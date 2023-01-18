soma = 0
cont = 0
for n in range(1, 7):
    num = int(input('Digite um numero'))
    if num % 2 == 0:
        soma = num + soma
        cont += +1
print('Foram {} somados e a soma é {}'.format(cont, soma))