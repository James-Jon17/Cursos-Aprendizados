const pessoa = {
    nome: 'Jota',
    sobrenome: 'Alcantara',
    idade: 24,
    endereco: {
        rua: 'Alfredo',
        numero: '20'
    }
}

//const { nome: teste = '', sobrenome, idade, endereco: {rua, numero} } = pessoa;
//const nome = pessoa.nome
const { nome, ...resto} = pessoa
//console.log(teste, sobrenome, idade, rua, numero)
console.log(nome, resto)