const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'

const corUsuario = 'pink'
const corPadrao = corUsuario || 'Preto'

console.log(nivelUsuario, corPadrao)
