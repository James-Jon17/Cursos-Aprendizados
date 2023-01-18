from time import sleep
valor1 = int(input('Digite o primeiro valor: '))
valor2 = int(input('Digite o segundo valorr: '))
escolha = 0
while escolha != 5:
    print('''    [ 1 ] Somar
    [ 2 ] mutiplicar
    [ 3 ] maior
    [ 4 ] novos números
    [ 5 ] sair do programa''')
    escolha = int(input('>>>>>  Qual sua opção: '))
    if escolha == 1:
        print('A soma é {}'.format(valor1 + valor2))
    elif escolha == 2:
        print('A mutiplicação entre {} e {} é {}'.format(valor1, valor2, valor1 * valor2))
    elif escolha == 3:
        if valor1 > valor2:
            print('Entre o valor {} e o valor {} o maior é {}'.format(valor1, valor2, valor1))
        else:
            print('Entre o valor {} e o valor {} o maior é {}'.format(valor1, valor2, valor2))
    elif escolha == 4:
        valor1 = int(input('Digite seu novo primeiro valor: '))
        valor2 = int(input('Digite seu novo segundo valor: '))
    else:
        print('Valor invalido tente novamente.')
    print('=-' * 20)
    sleep(1.5)
print('Fim do programa.')
