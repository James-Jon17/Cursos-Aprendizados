string = str(input('Digite Aqui: ')).upper().strip()
print('Sua palavra é {}, e ao contrario fica {}'.format(string, string[::-1]))
if string == string[::-1]:
    print('Sua palavra é um palindromo')
else:
    print('Sua palavra não é um palindromo')