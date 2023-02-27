function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Jota', 'Alcantara', 1,80, 80)
const p2 = criaPessoa('Paula', 'Fernanda', 1.60, 65)
const p3 = criaPessoa('Julia', 'Silva', 1.80, 70)

console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('Falando Tudoooo'))

console.log(p1)