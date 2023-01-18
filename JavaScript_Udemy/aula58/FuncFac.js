function Pessoa(nome, sobrenome) {
    const ID =12345
    
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': sou um método')
    }
}

const p1 = new Pessoa('Jota', 'Alcantara')
const p2 = new Pessoa('Kassia', 'Santos')


p1.metodo()