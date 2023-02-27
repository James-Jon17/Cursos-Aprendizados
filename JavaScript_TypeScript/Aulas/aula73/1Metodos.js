// Object.values (Retorna valores em chaves)
// Object.entries (Retorna o valor em chaves dentro de array)
// Object.getOwnPropertyDescriptor (Retorna V, W, E, C,)
// Object.assign(des, any)
// ...(spread)
// 
// Object.Keys (retorna as chaves)
// Object.Freeze (Trava os Objetos)
// Object.defineProperties (define vários propriedades)
// object.defineProperty (define uma propriedade)


const produto = {nome: 'Caneta', preco: 1.80}
const outraCoisa = {...produto, material: 'Porcelana'}

outraCoisa.nome = 'Jarra'
outraCoisa.preco = 80.52
console.log(produto)
console.log(outraCoisa)
