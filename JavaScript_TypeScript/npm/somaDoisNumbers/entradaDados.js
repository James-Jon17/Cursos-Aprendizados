const input = require('readline-sync');input

console.log('programa que soma dois');
let valor1 = parseFloat(input.question('Valor de A: '));
let valor2 = parseFloat(input.question('Valor de B: '));
let total = valor1 + valor2;
console.log(`${valor1} + ${valor2} = ${total}`);
