const produto = {nome: 'Caneta', preco: 1.80}
Object.freeze(produto)
produto.nome = 'Garrafa'
console.log(produto)
const caneca = Object.assign({}, produto, {material: 'porcelantao' })
console.log(Object.keys(produto))