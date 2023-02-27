const pessoa = {
    nome: 'Jane',
    sobrenome: 'Costa'
}

const chave = 'nome'
const chave2 = 'sobrenome'
console.log(pessoa.nome)
console.log(pessoa[chave])
console.log(pessoa['sobrenome'])

console.log('------------')

const pessoa1 = new Object()
pessoa1.nome = 'Jota'
pessoa1.sobrenome = 'Alcantara'
pessoa1.idade = 24
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

console.log('-------------')

console.log(pessoa1.falarNome())
console.log(pessoa1.getDataNascimento())

for(let chave in pessoa1) {
    console.log(pessoa1[chave])
}