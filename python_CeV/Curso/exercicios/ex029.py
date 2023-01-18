print('Detram')
velocidade = int(input('Qual a velocidade atual do veiculo: '))
multa = float((velocidade-80) * 7)
if velocidade >= 80:
    print('Sua velocidade é de {}Kmh você foi multado em {:.2f}R$, cuidado use cinto de segurança.'.format(velocidade, multa))
print('Bom dia e dirija com segurança!'.format(velocidade))