class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está dialogando`)
}

const p1 = new Pessoa('Jota', 'Alcantara')
const p2 = new Pessoa('Jane', 'Costna')
const p3 = new Pessoa('Joana', 'Amorim')

const p4 = new Pessoa2('Carlo', 'Amorim')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
