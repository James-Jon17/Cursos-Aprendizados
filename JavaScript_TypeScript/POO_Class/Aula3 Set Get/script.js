class Carro {
    constructor(marca, modelo, cor) {
        if (!marca || !modelo || !cor) {
            throw new Error('É necessário: Marca, Modelo e Cor!')
        }
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ligado = false
        this.km = 0
        this.tanque = null
    }
    
    info() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log(`Km: ${this.km}`)
        console.log(`Tanque: ${this.tanque}`)
        console.log("--------------------")
        
    }

    ligar() {
        this.ligado = true
    }

    desligar() {
        this.ligado = false
    }

    set encheTanque(qtde){
     if (this.tanque + qtde > 100) {
        this.tanque = 100;
        console.log('Tanque cheio')
     } else if (this.tanque + qtde < 0) {
        this.tanque = 0
        console.log('Tanque vazio')
     } else {
        this.tanque += qtde
        console.log(`Tanque abastecido com ${qtde} litros`)
     }
        
    }

    get valortanque() {
        return console.log(`O tanque está com ${this.tanque} L`)
    }
}

c1 = new Carro("WV", "GolfGTI", "Preto")
c2 = new Carro("Honda", "HRV", "Prata")
c1.encheTanque = 100
console.log(c1.valortanque)
//c1.ligaDesliga(true)
c1.info()
//c2.info()
console.log(Carro)
console.log(c1)