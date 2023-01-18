genero = str(input('Digite seu genero: ')).strip().upper()[0]
while genero not in 'MmFf':
    genero = str(input('Genero invalido, tente novamente: ')).strip().upper()[0]
print('Seu genero foi {}'.format(genero))