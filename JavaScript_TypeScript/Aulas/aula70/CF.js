//Constrocutor functions
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

const p1 = new Pessoa('Jota', 'Alcantara', 24)
Object.freeze(p1)
const p2 = new Pessoa('Jane', 'Costa', 29)
p2.fala = function() {console.log(`${this.nome} Fala oi`)}
p2.fala()
for(let chaves in p1)
console.log(p1[chaves])
console.log(p2)