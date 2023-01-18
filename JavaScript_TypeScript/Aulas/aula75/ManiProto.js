const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.dir(objB)
console.log(objB.chaveA)
console.log(objC.chaveA)