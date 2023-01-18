ano = 0
for a in range(1, 8):
    ano += 1
    nascimento = int(input('Em que ano a {} pessoa nasceu?: '.format(ano)))
    if nascimento < 2005:
        print('maiores de idade')
    else:
        print('menores de idade')