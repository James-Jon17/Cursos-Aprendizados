function* geradora1() {
    //codigo qq
    yield 'Valor 1'
    //codigo qq
    yield 'valor 2'
    //codigo qq
    yield 'valor 3'
}

const g1 = geradora1()
for(let valor of g1) {
    console.log(valor)
}
console.log(g1.next())

