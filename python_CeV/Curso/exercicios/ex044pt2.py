print('{:=^40}'.format('Loja Jotinha'))
preco = float(input('Preço das compras: R$'))
pagamento = int(input('''Forma de pagamento
[ 1 ] à vista dinheiro/cheque
[ 2 ] à vista cartão
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão
Qual sua opção?'''))

if pagamento == 1:
    total = preco - (preco * 0.1)
elif pagamento == 2:
    total = preco - (preco * 0.05)
elif pagamento == 3:
    total = preco
    parcela = total / 2
    print('Sua compra será parcelada em 2x de {:.2f}'.format(parcela))
elif pagamento == 4:
    total = preco + (preco * 0.2)
    totparc = int(input('Quantas parcelas'))
    if totparc <= 2:
        total = preco
        parcela = total / 2
        print('Sua compra será parcelada em 2x de R${:.2f}'.format(parcela))
    else:
        parcela = total / totparc
        print('Sua compra sera parcelada em {}x de R${:.2f} COM JUROS'.format(totparc, parcela))
else:
    total = preco
    print('Opção de pagamento inválida')
print('Sua compra de R${:.2f} vai custar R${:.2f} no final'.format(preco, total))