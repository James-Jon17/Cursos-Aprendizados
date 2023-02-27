function getTimeFromSec(segundos) {
    const data =new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    })
}

console.log(getTimeFromSec(10))


const timer = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let tempo

function iniciRelogio(){
    tempo = setInterval(function() {
        segundos++;
        timer.innerHTML = getTimeFromSec(segundos)
    }, 1000)
}

document.addEventListener('click', function(e) {
    const elemento = e.target
    
    if(elemento.classList.contains('zerar')) {
        console.log('você clicou em zerar')
    }
})

iniciar.addEventListener('click', function(event) {
    timer.classList.remove('pausado')
    clearInterval(tempo)
    iniciRelogio()
})

pausar.addEventListener('click', function(event) {
    timer.classList.add('pausado')
    clearInterval(tempo)
})

zerar.addEventListener('click', function(event) {
    clearTimeout(tempo)
    timer.innerHTML = '00:00:00'
    segundos = 0
})
