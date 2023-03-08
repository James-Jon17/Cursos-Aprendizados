Object.prototype

class Carro{
    constructor(tpCombus) {
        this.qtdeCombus = 100
        this.ligado = false
        this.tipoCombus = tpCombus
    }

    info() {
        console.log(`========================`)
        console.log(`Tipo de carro............: ${this.getClassName()}`);
        console.log(`Quantidade de Combustivél: ${this.qtdeCombus}`)
        console.log(`Ligado...................: ${this.ligado ? "Sim" : "Não"}`)
        console.log(`Tipo de Combustível......: ${this.tipoCombus}`)
        
    }

    set setLigado(boleano) {
        this.ligado = boleano
    }

    get getLigado() {
        return this.ligado
    }

    set encheTanque(qtde){
        if (this.qtdeCombus + qtde > 100) {
           this.qtdeCombus = 100;
           console.log('Tanque cheio')
        } else if (this.qtdeCombus + qtde < 0) {
           this.qtdeCombus = 0
           console.log('Tanque vazio')
        } else {
           this.qtdeCombus += qtde
           console.log(`Tanque abastecido com ${qtde} litros`)
        }
           
       }

       getClassName() {
        return this.constructor.name;
      }
}

class CarroCombate extends Carro{
    constructor(tpCombus, arma, pneu, carenagem) {
        super(tpCombus);
        this.arma = arma
        this.pneu = pneu
        this.carenagem = carenagem
    }

    info(){
    super.info()
        console.log(`Arma.....................: ${this.arma}`);
        console.log(`Tipo de Pneu.............: ${this.pneu}`);
        console.log(`Carenagem................: ${this.carenagem}`);
        console.log(`========================`)
    }
}

Carro.prototype.potencia = 500
Carro.prototype.vel = 0
Carro.prototype.velMax = 0

Carro.prototype.info2 = function() {
    this.info()
    console.log(`Potencia...: ${this.potencia}`)
    console.log(`Velocidade.: ${this.vel}`)
    console.log(`Vel Max....: ${this.velMax}`)
}

c1 = new Carro(1)
c1.info()

c2 = new CarroCombate(2, "Cal: 55.5", "aro 20", "blindado", 2)
c2.info()
console.log(c2.potencia)
console.log(Carro.prototype)
c1.info2()

console.log(CarroCombate.prototype === Carro.prototype)