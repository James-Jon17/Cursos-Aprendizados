function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {

    falar(){
        console.log(`${this.nome} está falando`)
    },

    comer(){
        console.log(`${this.nome} está comendo`)
    },

    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Jota', 'Alcântara')
console.log(p1)
const p2 = criaPessoa('Paula', 'Luiza')
console.log(p2)


console.log('#############################')


function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está dialogando`)
}

// function falar() {
//     console.log(`${this.nome} está querendo conversar`)
// }

// falar.prototype = Object.create(Pessoa.prototype)


const p3 = new Pessoa('Carlos', 'Fernando')
console.log(p3)