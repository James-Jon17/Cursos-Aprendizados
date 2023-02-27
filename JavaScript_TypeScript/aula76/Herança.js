function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumeto = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumeto = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        confugurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}


const caneca = new Caneca('Pikachu', 32, 'porcelanto', 50)
const caneta = new Produto('Gen', 120)
const camiseta = new Camiseta('Regata', 25, 'preta')
const camiseta2 = new Camiseta('Manga-long', 80, 'azul')
// caneca.estoque(100)
// camiseta.aumeto(10)
console.log(camiseta2)
console.log(camiseta)
console.log(caneta)
console.log(caneca)
console.log(caneca.estoque)