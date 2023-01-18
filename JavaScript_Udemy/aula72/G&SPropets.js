function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        configurable: false, // configuravel
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Value error')
                return
            }

            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '')
            nome = valor
        }
    }
}

const p2 = criaProduto('Casaco')



const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
p2.nome = 'qualquer coisa.'
p1.estoque = 300
console.log(p1.estoque)
console.log(p2.nome)