A = float(input('Reta A'))
B = float(input('Reta B'))
C = float(input('Reta C'))
if A < B + C and B < A + C and C < A + B:
    print('Suas retas formam um triangulo ', end='')
    if A == B == C:
        print('Equilatero!')
    if A != B != C != A:
        print('Escaleno')
    else:
        print('Isosceles!')
else:
    print('Suas retas não formam um triangulo')