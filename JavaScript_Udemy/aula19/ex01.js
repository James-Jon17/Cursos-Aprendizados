let a = 'A'
let b = a

console.log(a, b)

a = 'B'

console.log(a, b)


let A = [1, 2, 3]
let B = [...A]

console.log(A, B)

A.push(4)

console.log(A, B)

A.pop(4)

console.log(A, B)

B.pop()
console.log(A, B)