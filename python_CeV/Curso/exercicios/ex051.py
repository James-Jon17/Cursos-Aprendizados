primeiro = int(input('Primeira termo: '))
razao = int(input('Razão: '))
enezima = primeiro + (10 - 1) * razao
for c in range(primeiro, enezima +1, razao): #(1, 10, tanto em tano)
    print(c, end=' ')