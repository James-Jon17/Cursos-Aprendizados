const pessoa1 = {
    nome: 'Jota', sobrenome: 'Alcantara', idade: 24,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi... e minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()