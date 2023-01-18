dias = int(input('Quantos dias você ficou com o carro?: '))
km = float(input('Quantos kms rodados?: '))
valor = (dias * 60) + (km * 0.15)
print(f'O valor a pagar é de {valor:.2f}R$')
