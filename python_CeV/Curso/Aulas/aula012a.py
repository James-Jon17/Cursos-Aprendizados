nome = str(input('Digite seu nome: ')).title()
if nome == 'João':
    print('Seu nome é bacana {}!'.format(nome))
elif nome == 'Cami' or nome == 'Kami' or nome == 'Mil':
    print('{} seu nome tem uma peculiaridade para João'.format(nome))
elif nome in 'Ana Claudia Paula Julia':
    print('Seu nome é legal')
elif nome == 'Laura':
    print('Seu nome é especial')
else:
    print('Seu nome é espcial para você!')
print('Tenha um bom dia, {}!'.format(nome))