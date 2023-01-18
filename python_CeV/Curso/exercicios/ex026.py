
frase = str(input('Digite uma frase')).upper().strip()
print(frase.capitalize())
print('O A na sua palavra aparece {} vezes'.format(frase.count('A')))
print('O primeiro A aparece na posição {}'.format(frase.find('A')+1))
print('O ultimo A aparece na posição {}'.format(frase.replace(' ', '').rfind('A')+1))
