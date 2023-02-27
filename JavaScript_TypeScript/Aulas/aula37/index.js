const nome = ['Jota', 'Alcantara', 30];

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log('####')

for(let i in nome) {
    console.log(nome[i])
}

console.log('####')

for(let i of nome) {
    console.log(i)
}

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})