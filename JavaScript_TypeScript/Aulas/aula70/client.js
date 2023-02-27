function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomecompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Jota', 'Alcantara')
console.log(p1.nomecompleto)