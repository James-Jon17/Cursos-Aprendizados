let num = [1, 2, 3,]
let it = num[Symbol.iterator]()
//console.log(`O numero de valor é ${valor}`)
let tamanho = num.length
console.log(`O tamanhod o array é ${tamanho}`)


for(let i = 0; i < num.length; i++) {
    let v = it.next().value
    v % 2 === 0 ? console.log('Par') : console.log('impar')
}