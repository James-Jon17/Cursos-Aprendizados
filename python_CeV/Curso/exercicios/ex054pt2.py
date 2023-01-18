from datetime import date
atual = date.today().year
totmaior = 0
totmenor = 0
toterro = 0
for pess in range(1, 8):
    nasc = int(input('Em que ano a {}ª pessoa nasceu: '.format(pess)))
    idade = atual - nasc
    if idade >= 99 or idade < 3:
        toterro += 1 #quantidade de pessoas que colocaram idade invalida
    elif idade >= 21:
        totmaior += 1
    else:
        totmenor += 1
print('Ao todo tivemos {} pessoas maiores de idade'.format(totmaior))
print('Ao todo tivemos {} pessoas menor de idade'.format(totmenor))
print('Idades invalidas {}'.format(toterro))