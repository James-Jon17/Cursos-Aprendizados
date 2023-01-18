from datetime import date

print('''Gênero
[ 1 ] Masculino
[ 2 ] Feminino ''')
opcao = int(input('Diga seu gênero: '))
nasc = int(input('Em que ano você nasceu: '))
ano = date.today().year
idade = ano - nasc
if opcao == 1 and idade == 18:
    print('Homens nascido em {} com {} anos são obrigados a se alistar esse ano!'.format(nasc, idade))
elif opcao == 1 and idade < 18:
    saldo = 18 - idade
    anos = ano + saldo
    print('Homens nascido em {} com {} anos vão precisar se alistar em {}.'.format(nasc, idade, anos))
elif opcao == 2 and idade == 18:
    print('Mulheres com {} anos não tem obrigação de servir, caso queira este é o ano do seu alistamento'.format(idade))
elif opcao == 2 and idade < 18:
    saldo = 18 - idade
    anos = ano + saldo
    print('Mulheres com menos de 18 anos e com {} anos de idade podem servir em {}'.format(idade, anos))
elif opcao == 1 or opcao == 2 and idade > 18:
    saldo = idade - 18
    anos = ano - saldo
    print('Seu tempo de alistamento já passou, você deveria ter se alistado no ano de {}'.format(anos))
else:
    print('Gênero ou idade incorreto')

