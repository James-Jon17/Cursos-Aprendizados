const Veiculo = {
    marca: "",
    modelo: "",
    cor: "",
    cambio: "",


    info: function() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Marca: ${this.cor}`)
        console.log(`Modelo: ${this.cambio}`)
    }
}

const Carro = Veiculo

Carro.marca = "VW"
Carro.modelo = "Golf"
Carro.cor = "Preto"
Carro.cambio = "Auto"

console.log(Carro)
Carro.info()





// Carro.info()


// console.log("-------")

// // Carro.info()


// Carro["marca"] = "GM"
// Carro["modelo"] = "Camaro"

// Carro.info()

// console.log("------")


// let carro2 = Object.create(Carro)

// carro2.marca = "Honda"
// carro2.modelo = "HRV"

// carro2.info()

// console.log(typeof Carro)