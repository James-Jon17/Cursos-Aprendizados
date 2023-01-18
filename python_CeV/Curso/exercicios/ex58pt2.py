import random
from time import sleep

print('''Escolha um numero entre 1 e 5''')

jogador = int(input('Escolha um numero: '))
# cor = [1, 2, 3, 4, 5] iria usar o choice mas preferi o randint
pc = random.randint(1, 6)
numero_aleatorio = random.uniform(0.5, 1.5)
tentativas = 1
while jogador != pc:
    tentativas += 1
    pc = random.randint(1, 6)
    print('pensando')
    sleep(numero_aleatorio)
    jogador = int(input('Errou digite novamente: '))
sleep(numero_aleatorio)
print('você ganhou com {} tentativas'.format(tentativas))