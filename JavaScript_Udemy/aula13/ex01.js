const nome = prompt('Digite seu nome completo!')
document.body.innerHTML = `O seu nome é: <strong>${nome}</strong> <br>`
document.body.innerHTML += `Seu nome tem <strong>${nome.length} <br>`

document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome.charAt(1)}</strong> <br>`

document.body.innerHTML += `Primeiro indice A do seu nome é <strong>${nome.indexOf('a')}</strong> <br>`

document.body.innerHTML += `O ultimo indice do seu nome é <strong>${nome.lastIndexOf('a')}</strong> <br>`

document.body.innerHTML += `As 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br>`

document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br>`

document.body.innerHTML += `Seu nome em maisculo é: <strong>${nome.toUpperCase()}</strong> <br>`

document.body.innerHTML += `Seu nome em minusculo é: <strong>${nome.toLowerCase()}`