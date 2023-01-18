somaidade = 0
media = 0
maioridadeH = 0
nomevelho = ''
totmulher20 = 0
for p in range(1, 5):
    print(' ---- {} Pessoa ----'.format(p))
    nome = str(input('Nome: ')).strip()
    idade = int(input('Idade: '))
    genero = str(input('Genero [M/F]: ')).strip()
    if genero != 'M' and genero != 'F':
        print('Genero invalido') #tentando para o programa se colocar um genero invalido
    somaidade += idade
    media = somaidade/p
    if p == 1 and genero in 'Mm':
        maioridadeH = idade
        nomevelho = nome
    if genero in 'Mm' and idade > maioridadeH:
        maioridadeH = idade
        nomevelho = nome
    if genero in 'Ff' and idade < 20:
        totmulher20 += 1

print('A media de idade do grupo é {} anos'.format(media))
print('O homem mais se chama {} e tem {} anos'.format(nomevelho, maioridadeH))
print('Ao todos são {} mulheres  com menos de 20 anos'.format(totmulher20)) #tenta colocar mulher se tiver uma e plural se tiver mais