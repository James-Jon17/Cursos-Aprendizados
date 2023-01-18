string = str(input('Digite Aqui: ')).upper().strip()
palavra = string.split()
junto = ''.join(palavra)
inverso = ''
for letra in range(len(junto) - 1, -1, -1):
    inverso += junto[letra]
print('O inverso de {} é  {}'.format(junto, inverso))

if inverso == junto:
    print('É um palindromo')
else:
    print('A frase digita não é um palindromo')