const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
}, 0)
console.log(total)

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Leticia', idade: 55 },
    {nome: 'Rosana', idade: 84 },
    {nome: 'Wallace', idade: 47 },
    {nome: 'Eduardo', idade: 73 }
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maisVelha)