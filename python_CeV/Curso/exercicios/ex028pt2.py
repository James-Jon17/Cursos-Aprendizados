from random import randint
from time import sleep
computador = randint(0, 5)
print('-=-' * 20)
print('Vou pensar em um numero entre 0 e 5, tente advinhar')
print('-=-' * 20)
jogador = int(input('Advinhe o numero: '))
print('Processando...')
sleep(2.5)
if jogador == computador:
    print('Parabens! Você acertou!')
else:
    print('Desculpe! Você errou!')
print('Meu numero foi {}'.format(computador))