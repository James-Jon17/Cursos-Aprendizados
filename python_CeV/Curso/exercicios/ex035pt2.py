print('\033[31;46m=-\033[m' * 20)
print('\033[1;32mFormando um triângulo\033[m')
print('\033[31;46m=-\033[m' * 20)
r1 = float(input('Primeiro seguimento'))
r2 = float(input('Segundo seguimento'))
r3 = float(input('Terceiro seguimento'))
if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('Os seguimentos {}formam{} um triângulo'.format('\033[32m', '\033[m'))
else:
    print('Os seguimentos {}não formam{} um triangulo'.format('\033[31m', '\033[m'))