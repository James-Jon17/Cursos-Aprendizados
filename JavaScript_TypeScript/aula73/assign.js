const produto = {nome: 'Caneta', preco: 1.80}
const caneca = Object.assign({}, produto, {material: 'porcelantaro'})

caneca.nome = 'Jarra'
caneca.preco = 80.52
console.log(produto)
console.log(caneca)
