const produto = {nome: 'Caneta', preco: 1.80}
const caneca = {nome: produto.nome, preco: produto.preco, material: 'porcelanato'}

caneca.nome = 'Jarra'
caneca.preco = 80.52
console.log(produto)
console.log(caneca)
