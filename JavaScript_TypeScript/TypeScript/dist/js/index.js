"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 25;
x = 12;
console.log(x);
let y = 12;
let firstName = "Jota";
let age = 25;
const isAdmin = true;
let secondName = "Alcantara";
let age2 = 25;
const isAdmin2 = true;
firstName = "Joao";
const myNumber = [1, 2, 3];
console.log(firstName.toUpperCase());
console.log(myNumber.push(5));
console.log(myNumber);
let myTuple = [25, "Jota", ["classe", "A"]];
const user = {
    name: "Marcos",
    age: 18
};
console.log(user);
console.log(user.name);
let a = 0;
a = "jota";
a = true;
let id = "10";
id = 20;
const uderId = 10;
const productId = "0001";
const shirId = 123;
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa Polo",
    size: size.G
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Jota"));
function logger(msg) {
    console.log(msg);
}
logger("ola bom dia");
function greeting(name, greet) {
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
        return;
    }
    console.log(`Ola ${name}`);
}
greeting("jose");
greeting("Pedro", "Sir");
function somaNum(num) {
    return num.n1 + num.n2;
}
console.log(somaNum({ n1: 1, n2: 2 }));
function multNum(num) {
    return num.n1 * num.n2;
}
const someNum = {
    n1: 8,
    n2: 10
};
console.log(multNum({ n1: 5, n2: 10 }));
console.log(multNum(someNum));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número!");
}
doSomething(5);
doSomething(true);
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["Jota", "Paula", "Fernanda"];
showArraysItens(a1);
showArraysItens(a2);
class User {
    constructor(name, role, age, isApproved) {
        this.name = name;
        this.role = role;
        this.age = age;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserAge(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.age}`);
            return;
        }
        console.log("Informação restrita");
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Tipo de usuário: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zequina", "Admin", 25, true);
console.log(zeca);
zeca.showUserName();
zeca.showUserAge(true);
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VolkWhagen", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.floor(Math.random() * 10);
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
