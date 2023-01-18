string = str(input('Digite Aqui: ')).upper().strip()
palavra = string.split()
junto = ''.join(palavra)
print('Sua palavra é {}, e ao contrario fica {}'.format(string, junto[::-1]))
if junto == junto[::-1]:
    print('Sua palavra é um palindromo')
else:
    print('Sua palavra não é um palindromo')