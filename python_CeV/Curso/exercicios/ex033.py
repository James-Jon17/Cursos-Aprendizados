print('Mostrando tamanhos')
n1 = int(input('Digite um numero'))
n2 = int(input('Digite outro numero'))
n3 = int(input('Digite mais um numero'))
#Quem é o menor
if n1<n2 and n1<n3:
    menor = n1
if n2<n1 and n2<n3:
    menor = n2
if n3<n2 and n3<n1:
    menor = n3
#Quem é o maior
if n1>n2 and n1>n3:
    maior = n1
if n2>n1 and n2>n3:
    maior = n2
if n3>n1 and n3>n2:
    maior = n3
print('seus numeros foram {} {} {} e o menor é {} e o maior é {}'.format(n1, n2, n3, menor, maior))
