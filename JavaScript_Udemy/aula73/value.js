const produto = {nome: 'Caneta', preco: 1.80}
console.log(Object.values(produto))

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}