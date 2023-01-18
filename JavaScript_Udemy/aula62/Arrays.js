const nomes = ['Jota', 'Alice', 'Fernanda']
const novo = [...nomes]
const Nomes = new Array('July', 'Cassia', 'Paulo')

console.log(Nomes)
const retirado = nomes.pop()
console.log(retirado)
console.log(novo)
console.log(nomes)
console.log(nomes.length)
const removida = Nomes.shift()
console.log(Nomes)
console.log(removida)
Nomes.unshift('Laura')
console.log(Nomes)