const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro)
console.log(numeros)


const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Leticia', idade: 55 },
    {nome: 'Rosana', idade: 19 },
    {nome: 'Wallace', idade: 47 },
]

const Nomes = pessoas.map(obj => obj.nome
)
const idade = pessoas.map(obj => ({idade: obj.idade}))
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})
console.log(Nomes)
console.log(idade)
console.log(comIds)
console.log(pessoas)