nomeCompleto = input('Digite seu nome completo:').strip()
semEspaco = nomeCompleto.replace(" ", "")
dividido = nomeCompleto.split()
primeiroNome = dividido[0]
ultimoNome = dividido[-1]
print(f'Seu nome completo é {nomeCompleto}')
print(f'Seu nome completo em maiúsculo é {nomeCompleto.upper()}')
print(f'Seu nome completo em minúsculo é {nomeCompleto.lower()}')
print(f'Seu nome tem completo tem {len(semEspaco)} letras')
print(f'Seu primeiro nome é {primeiroNome}')
print(f'Seu primeiro nome tem {len(primeiroNome)} letras')
print(f'Seu ultimo nome é {ultimoNome}')
