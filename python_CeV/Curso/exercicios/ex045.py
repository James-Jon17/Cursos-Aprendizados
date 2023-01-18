from random import randint
from time import sleep
itens = ('Pedra', 'Papel', 'Tesoura')
computador = randint(0, 2)
print('''
[ 0 ] Pedra
[ 1 ] Papel
[ 2 ] Tesoura''')
jogador = int(input('Faça sua jogada'))
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!!')
print('=-'*14)
print('O computador jogou {}'.format(itens[computador]))
print('Você jogou {}'.format(itens[jogador]))
print('=-'*14)
if computador == 0: # Computador Jogou Pedra
    if jogador == 0:
        print('\033[36mEmpate')
    elif jogador == 1:
        print('\033[32mVocê venceu')
    elif jogador == 2:
        print('\033[31mVocê perdeu')
    else:
        print('jogada invalida')
elif computador == 1: #Computador Jogou Papel
    if jogador == 0:
        print('\033[31mVocê perdeu')
    elif jogador == 1:
        print('\033[36mEmpate')
    elif jogador == 2:
        print('\033[32mVocê venceu')
    else:
        print('Jogada invalida')
elif computador == 2: #Computador jogou Tesoura
    if jogador == 0:
        print('\033[32mVocê venceu')
    elif jogador == 1:
        print('\033[31mVocê perdeu')
    elif jogador == 2:
        print('\033[36mEmpate')
    else:
        print('jogada invalida')