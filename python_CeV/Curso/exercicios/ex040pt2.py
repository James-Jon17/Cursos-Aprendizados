nota1 = float(input('Primeira nota: '))
nota2 = float(input('Segunda nota: '))
media = (nota1 + nota2) / 2
print('A media das notas {} e {} é {}'.format(nota1, nota2, media))
if 7 > media >= 5:
    print('O aluno está em \033[33mrecuperação')
elif media < 5:
    print('O aluno está \033[31mReprovado!')
else:
    print('O aluno está \033[32mAprovado')