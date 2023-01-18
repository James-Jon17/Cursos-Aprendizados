print('{:=^40}'.format('Loja Jotinha'))
preco = float(input('Preço das compras: R$'))
pagamento = int(input('''Forma de pagamento
[ 1 ] à vista dinheiro/cheque
[ 2 ] à vista cartão
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão
Qual sua opção?'''))

if pagamento == 1:
    print('Sua compra de {:.2f} vai custar {} no final'.format(preco, (preco - (preco * 0.1))))
elif pagamento == 2:
    print('Sua compra de {:.2f} vai custar {} no final'.format(preco, (preco - (preco * 0.05))))
elif pagamento == 3:
    valparc = preco / 2
    print('Seu compra de {:.2f} parcelada em 2x fica {:.2f}'.format(preco, (preco / 2)))
elif pagamento == 4:
    parcela = int(input('Quantidade de parcela'))
    valparc = preco / parcela
    if parcela > 2:
        print('Seu compra de {:.2f} parcelada em {}x fica {:.2f} e o total de {:.2f}'.format(preco,parcela, valparc, ((preco * 0.2) + preco)))
    else:
        print('Seu compra de {:.2f} parcelada em 2x fica {:.2f} e o total de {:.2f}'.format(preco,valparc, (preco / 2)))
else: print('Valor invalido, tente novamente')