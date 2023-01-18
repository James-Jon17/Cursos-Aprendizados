from random import choice
print('Sorteio de alunos')
aluno1 = input('digite o nome do aluno 1')
aluno2 = input('digte o nome do aluno 2')
aluno3 = input('digite o nome do aluno 3')
alunos = [aluno1, aluno2, aluno3]
escolhido = choice(alunos)
print('O aluno escolhido foi {}'.format(escolhido))