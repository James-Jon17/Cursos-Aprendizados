from time import sleep

Nome = '\033[36:4m Validação de Dados\033[m'
print('{:=^40}'.format(Nome))
print('-' * 30)
teste = 0
while teste < 1:
        s = input('Qual seu sexo? [M/F]: ').upper()[0]
        if s == 'M':
            teste = teste + 1
        elif s == 'F':
            teste = teste + 1
        else:
            print('\033[31m RESPOSTA INVÁLIDA\033[m')
print('Processando...')
sleep(1)
print('=' * 30)
if s == 'M':
    print('Você é homem!')
else:
    print('Você é mulher!')