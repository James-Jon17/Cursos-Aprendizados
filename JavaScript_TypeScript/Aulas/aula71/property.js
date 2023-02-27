function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: estoque, //valor
        writable: true, //alterar valor
        configurable: false // configuravel
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 50
delete p1.estoque
console.log(p1)
console.log(Object.keys(p1))
console.log('-----')
for(let chaves in p1)
console.log(chaves)