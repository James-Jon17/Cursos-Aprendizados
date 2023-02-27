class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome+ 'já ligado')
            return
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome+ 'já desligado')
            return
        }

        this.ligado = false
    }
}

class Smartphones extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)

        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, cor, modelo, CWfi) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
        this.CWfi = CWfi
    }

    // ligar() {
    //     console.log('Metodo Boot alterado')
    // }

    falarOi() {
        console.log('Oi')
    }
    
}

const s1 = new Smartphones('iphone', 'Preto', 'Pro')
console.log(s1)
const t1 = new Tablet('Ipad', 'Cinza', 'Pro', 'WiFi')
// console.log(t1)
t1.ligar()
t1.ligar()
t1.falarOi()

