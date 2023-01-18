const h1 = document.querySelector('.container h1')
const data = new Date()


function zeroAEsquerda(num) {
    return num >= 10?num:`0${num}`
}

function getDiaSemanaTexto(DiaSemana) {
    let dia = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return dia[DiaSemana]
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
}

function creatDate(data) {
    const DiaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(DiaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
}

h1.innerHTML = creatDate(data)