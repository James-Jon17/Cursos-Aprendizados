const h1 = document.querySelector('.container h1')
const data = new Date()

function zeroAEsquerda(num) {
    return num >= 10?num:`0${num}`
}

function getDiaSemanaTexto(DiaSemana) {
    let DiaSemanaTexto

    switch (DiaSemana) {
        case 0:
            DiaSemanaTexto = 'Domingo'
            break;
        case 1:
            DiaSemanaTexto = 'segunda-feira'
            break;
        case 2:
            DiaSemanaTexto = 'terça-feira'
        case 3:
            DiaSemanaTexto = 'quarta-feira'
            break;
        case 4:
            DiaSemanaTexto = 'quinta-feira'
            break;
        case 5:
            DiaSemanaTexto = 'sexta-feira'
            break;
        case 6:
            DiaSemanaTexto = 'sábado'
            break;
        default:
            DiaSemanaTexto = ''
            break;
    }
    return DiaSemanaTexto
}

function getNomeMes(numeroMes) {
    let nomeMes

    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro'
            break;
        case 1:
            nomeMes = 'fevereiro'
            break;
        case 2:
            nomeMes = 'março'
            break;
        case 3:
            nomeMes = 'abril'
            break;
        case 4:
            nomeMes = 'maio'
            break;
        case 5:
            nomeMes = 'junho'
            break;
        case 6:
            nomeMes = 'julho'
            break;
        case 7:
            nomeMes = 'agosto'
            break;
        case 8:
            nomeMes = 'setembro'
            break;
        case 9:
            nomeMes = 'outubro'
            break;
        case 10:
            nomeMes = 'novembro'
            break;
        case 11:
            nomeMes = 'dezembro'
            break;
        default:
            nomeMes = ''
            break;
    }
    return nomeMes
}

function creatDate(data) {
    const DiaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(DiaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
}

h1.innerHTML = creatDate(data)
