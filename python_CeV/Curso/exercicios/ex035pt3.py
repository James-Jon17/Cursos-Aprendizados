A = float(input('Valor de A'))
B = float(input('Valor de B'))
C = float(input('Valor de C'))
formula = A < B + C and B < A + C and C < A + B
print(formula)
if formula and B == A == C:
    print('Suas retas formam um triangulo e seu triangulo é Equilátero')
elif formula and A == B or A == C: #Erro nessa linha, O texto executa mesmo estando errado
    print('Suas retas formam um triangulo e seu triangulo é Isósceles') #Descobrir qual erro e depois corrigir
elif formula and A != B != C != A:
    print('Suas retas formam um triangulo e seu triangulo é Escaleno')
else:
    print('Sua retas não podem formar um triângulo tente novamente')