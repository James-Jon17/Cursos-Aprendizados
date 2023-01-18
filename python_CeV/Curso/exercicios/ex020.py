from random import shuffle

aluno1 = input('Digite o nome do primeiro aluno')
aluno2 = input('Digite o nome do segundo aluno')
aluno3 = input('Digite o nome do terceiro aluno')
aluno4 = input('digite o nome do quarto aluno')
aluno5 = input('digite o nome do quinto aluno')
aluno6 = input('digite o nome do sexto aluno')


listaA = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6]
shuffle(listaA)
#print('O sorteado foi {}'.format(random.choice(listaA)))
print('O sorteado foi {}'.format(listaA))
