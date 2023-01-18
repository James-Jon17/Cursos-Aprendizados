let valor = Number(prompt('Digite um valor'))
let n_t = document.querySelector('#numero-titulo')
let texto = document.querySelector('#texto')

n_t.innerHTML = valor


texto.innerHTML = ' '
texto.innerHTML = `<p>A raiz quadrada do seu nume é ${Math.sqrt(valor)}</p>`
texto.innerHTML += `<p>${valor} é inteiro: ${Number.isInteger(valor)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(valor)}</p>`
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(valor)}</p>`
texto.innerHTML += `<p>Arredondando para baixo${Math.floor(valor)}</p>`
texto.innerHTML += `<p>Com duas casas decimais ${valor.toFixed(2)}</p>`