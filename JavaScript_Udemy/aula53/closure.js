function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Jota')
const funcao2 = retornaFuncao('Alancatara')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao())
console.log(funcao2())