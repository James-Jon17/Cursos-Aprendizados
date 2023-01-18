const hora = 24

if (hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite!')
} else {
    console.log('Veja Sua hora!')
}