const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(total)

const total2 = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) {
        acumulador += valor
    }
    return acumulador
}, 0)
console.log(total2)