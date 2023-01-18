nome = input('Olá usuario, diga seu nome: ')
num1 = int(input(f'{nome} agora escolha um número = '))
print(f'{nome}, seu número foi {num1}. Vamos trabalhar com ele')
num2 = num1 * 2
num3 = num1 * 3
num4 = num1 ** (1/2)

print('O dobro do seu {} é: {}'.format(num1, num2))
print('O triplo é {}'.format(num3))
print('E a raíz quadrada é {:.2f}'.format(num4))
