nota1 = float(input('Primeira nota: '))
nota2 = float(input('Segunda nota: '))
media = (nota1 + nota2) / 2
if media < 5:
    print('Sua média foi {} reprovado'.format(media))
elif media <= 5.0 and media < 6.9:
    print('Sua média foi {} recuperação'.format(media))
else:
    print('Sua média foi {} aprovado'.format(media))