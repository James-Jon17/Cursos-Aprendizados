import random
seuN= int(input('Escolha um número entre 1 e 5: '))
rando = [0, 1, 2, 3, 4, 5]
escolhido = random.choice(rando)
if seuN == escolhido:
    print('Você {}acertou{} !'.format('\033[32m', '\033[m'))
else:
    print('Você {}errou{}!'.format('\033[31m', '\033[m'))
print('O numero escolhido foi {}'.format(escolhido))
