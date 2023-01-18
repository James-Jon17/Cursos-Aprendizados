from random import choice
print('''
[1] vermelho
[2] verde
[3] amarelo'''
)
jogador = int(input('Escolha uma cor: '))
cor = [1, 2, 3]
pc = choice(cor)
if jogador == pc:
    print('jogador venceu')
elif jogador != pc:
    print('jogador perdeu')