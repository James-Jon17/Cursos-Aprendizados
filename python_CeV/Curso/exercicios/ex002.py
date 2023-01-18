print('Bem-vindo usuário. Vamo interagir ?')
nome = input('Primeiro, diga seu nome = ')
print('Certo, {}! Vamos descobrir o ano e o dia em que você nasceu?'.format(nome))
dia = input('Qual seu dia de nascimento = ')
mes = input('Qual mês que você nasceu = ')
ano = input('Certo, agora qual ano você nasceu? = ')
print('Perfeito.')
print('{} você nasceu no dia {} do mes {} do ano de {}'.format(nome, dia, mes, ano))
print('{} agora vamos somar?'.format(nome))
n1 = int(input('Digite um número = '))
n2 = int(input('Digite outro número = '))
n3 = n1 + n2
print('{} os numeros escolhidos foram {} e {}. A soma entre eles é = {}'.format(nome, n1, n2, n3))



