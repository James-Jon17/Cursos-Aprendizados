const nomes = ['Paulo', 'Jota', 'Carla', 'Mary', 'Suzan']


const Removidos = nomes.splice(1, 3, 'Elano', 'Selma')
console.log(nomes)
console.log(Removidos)

nomes.splice(nomes.length, 0, 'Arlindo')
console.log(nomes)

nomes.splice(1, Number.MAX_VALUE)
console.log(nomes)

