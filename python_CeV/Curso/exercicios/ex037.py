num = int(input('Digite um número: '))
print('''Escolha uma das bases para converção
[ 1 ] Para Binário
[ 2 ] Para Octal
[ 3 ] Para Hexadecimal''')
opcao = int(input('Sua opção: '))
if opcao == 1:
    print('{} convertido para Binário é igual a {}'.format(num, bin(num)[2:]))
elif opcao == 2:
    print('{} convertido para Octal é igual a {}'.format(num, oct(num)[2:]))
elif opcao == 3:
    print('{} convertido para Hexadecimal é igual a {}'.format(num, hex(num)[2:]))
else:
    print('Tente novamente')