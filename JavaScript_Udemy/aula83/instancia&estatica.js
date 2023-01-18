class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    //Método de instância
    aumentarVolume() {
        this.volume ++ 
    }
    DiminuirVolume() {
        this.volume --
    }

    //Método de estático
    static soma(x, y) {
        return x + y
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
// ControleRemoto.trocaPilha()
console.log(controle1)

console.log(ControleRemoto.soma(2, 4))