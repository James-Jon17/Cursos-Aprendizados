print('Financiando sua casa')
casa = float(input('Qual o valor da casa desejada: R$'))
salario = float(input('Qual sua média salárial: R$'))
anos = int(input('Quantos anos você pretende pagar: '))
parcela = (casa / anos) / 12
minimo = salario * 30 / 100
print('Para pagar uma casa de R${:.2f} em {} anos a prestação será de R${:.2f}'.format(casa, anos, parcela))
if parcela <= minimo:
    print('Emprestimo pode ser \033[32mCONCEDIDO \033[m')
else:
    print('Emprestimo \033[31mNEGADO')