function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)


const p2 = {
    nome: 'Caneco',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype)
p3.nome = 'Jaqueta'
p3.preco = 120
p3.tamanho = 'M'

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})



//p1.desconto(100)
p1.aumento(50)
console.log(p1)

p2.aumento(150)
console.log(p2)

p3.aumento(20)
console.log(p3)

p4.aumento(10)
console.log(p4)