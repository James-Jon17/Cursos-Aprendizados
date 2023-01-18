//                0        1        2
const alunos = ['João', 'Pedro', 'Paula']


alunos.push('Alice')
alunos.push('Luiza')

console.log(typeof alunos) // typeoff de Array é objetc
console.log(alunos instanceof Array)  // Comando para saber se esta trabalhando com Array


//console.log(alunos.slice(0, -2)) //Fateamento



//delete alunos[1] deleta apenas o elemento e continua o indice

//const removido = alunos.shift() // remove do inicio e tbm o indice
//const removido = alunos.pop() // remove do fim e tbm o indece


//alunos.unshift('Luiza') //adc no comeco
//alunos.push('Fabio')  // adc no fim

//alunos.push('Luiza')  //adc no fim
//alunos.push('Cassia')

//alunos[0] = 'Eduardo' // alterando o elemento
//alunos[3] = 'Carla' // adc indice e elemento

//alunos[alunos.length] = 'Luiza' //adc no fim
//alunos[alunos.length] = 'Julia'
//alunos[alunos.length] = 'Ana'

/*
console.log(alunos[2])  //acessando indices
console.log(alunos)
console.log(alunos[1])
*/