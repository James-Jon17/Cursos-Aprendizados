import random
lista = input('digite o primeiro numero'), input('digite o segundo numero'), \
    input('digite o terceiro numero'), input('digite o quarto numero')

print('O numero sorteado foi {}'.format(lista[random.randrange(len(lista))]))