const obj = [
    {
        nome: 'Jota',
        idade: 25,
        esta_trabalhando: null,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'auto_data'
        },
        hobbies: ['Treinar', 'Ler', 'Aprender']
    },
    {
        nome: 'Paula',
        idade: 23,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programadora',
            empresa: 'Microsft'
        },
        hobbies: ['Treinar', 'Ler', 'viajar']
    }
]

//converter para Json
const jsonData = JSON.stringify(obj)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
})