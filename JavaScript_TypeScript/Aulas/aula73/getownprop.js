const produto = {nome: 'Caneta', preco: 1.80}
Object.defineProperty(produto, 'nome', {
    value: 'Caneco', //alterado o valor nome
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.nome = 'Mudado'
console.log(produto)