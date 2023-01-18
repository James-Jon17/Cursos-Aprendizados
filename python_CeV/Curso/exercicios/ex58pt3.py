from random import randint

computador = randint(0, 10)
print('Sou seu computador, acabei de pensar em um numero entre, 0 e 10.')
print('Sera que você consegue advinhar qual foi')
acertou = False
palp = 0
while not acertou:
    jogador = int(input('Qual seu palpite: '))
    palp += 1
    if jogador == computador:
        acertou = True
    else:
        if jogador > computador:
            print('Menos... Tente novamete: ')
        else:
            print('Mais... Tente novamente ')
print('Acertou com {} tentativar!'.format(palp))
