function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        }
    })
}
 

const p1 = new Produto('Camisa', 20, 3)
console.log(p1)
for(let chaves in p1)
console.log(p1[chaves])