const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor)


//Valores par = [ 50, 80, 2, 8, 22 ]
//Valores *2 = [ 100, 160, 4, 16, 44 ]
//Valor Somado = 324
console.log(numerosPares)