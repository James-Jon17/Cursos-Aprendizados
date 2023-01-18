const conta =function(operador, acumulador, ...numeros) {
for (let numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero
}
    console.log(acumulador)
}

conta('*', 1, 10, 20, 30, 60, 100)