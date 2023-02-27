// annotation
let x: number = 25;

x = 12;

console.log(x);

// inferencia
let y = 12;

// tipos basicos
let firstName: string = "Jota";
let age: number = 25;
const isAdmin: boolean = true;

//Por annotation
let secondName = "Alcantara";
let age2 = 25;
const isAdmin2 = true;

firstName = "Joao"

const myNumber: number[] = [1, 2, 3];

console.log(firstName.toUpperCase())
console.log(myNumber.push(5))
console.log(myNumber);

//tuplas 

let myTuple: [number, string, string[]] = [25, "Jota", ["classe", "A"]]

//object literal
const user: {name: string; age: number} = {
    name: "Marcos",
    age: 18
}

console.log(user)
console.log(user.name)

//any qq tipo, má prática

let a: any = 0;

a = "jota"
a = true

//union type
let id: number | string = "10"

id = 20;

// type alias
type myIdType = number | string

const uderId: myIdType = 10
const productId: myIdType = "0001"
const shirId: myIdType = 123

//enum
// tamanhos de roupas (size: Medio, size: Pequeno)

enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Polo",
    size: size.G
}

console.log(camisa)

//literal types
let teste: "autenticado" | null

// teste = "outrovalor"
teste = "autenticado"
teste = null

//funcoes

function soma(a: number, b: number){
    return a + b
}

console.log(soma(12, 12))

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Jota"))

function logger(msg: string): void {
    console.log(msg)
}

logger("ola bom dia")

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
        return;
    } 
    console.log(`Ola ${name}`)
    
}

greeting("jose")
greeting("Pedro", "Sir")


// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function somaNum(num: MathFunctionParams) {
    return num.n1 + num.n2
} 

console.log(somaNum({n1:1, n2:2}))

function multNum(num: MathFunctionParams) {
    return num.n1 * num.n2
}

const someNum:MathFunctionParams = {
    n1: 8,
    n2: 10
}

console.log(multNum({n1:5, n2:10}))
console.log(multNum(someNum))


// narrowing
// checagem tipos

function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número!")
}

doSomething(5)
doSomething(true)

//generics

function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["Jota", "Paula", "Fernanda"]

showArraysItens(a1)
showArraysItens(a2)

//classes
class User {
    name
    role
    age
    isApproved

    constructor(name: string, role: string, age: number, isApproved: boolean) {
        this.name = name
        this.role = role
        this.age = age
        this.isApproved = isApproved
        }

        showUserName() {
            console.log(`O nome do usuário é ${this.name}`)
        }

        showUserAge(canShow: boolean): void {
            if (canShow) {
                console.log(`Idade do usuário é: ${this.age}`)
                return
            }
            console.log("Informação restrita")
        }

        showUserRole(canShow: boolean): void {
            if (canShow) {
                console.log(`Tipo de usuário: ${this.role}`)
                return
            }
            console.log("Informação restrita!")
        }
}


const zeca = new User("Zequina", "Admin", 25, true)

console.log(zeca)

zeca.showUserName()
zeca.showUserAge(true)
zeca.showUserRole(true)

//interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VolkWhagen", 4)
fusca.showBrand()

//herenca
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4)

a4.showBrand()

//decorators

// controct decoretor
function BaseParameters() {
    return function <T extends {new (...args: any[]): object}>(constructor: T) {
        return class extends constructor {
            id = Math.floor(Math.random() * 10)
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")

console.log(sam)