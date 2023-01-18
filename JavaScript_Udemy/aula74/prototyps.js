function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Jota', 'Alcântara')
const pessoa2 = new Pessoa('Laura', 'V.')

console.dir(pessoa1)
console.dir(pessoa2)