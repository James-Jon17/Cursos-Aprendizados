function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.res')

    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault()

       const nome = form.querySelector('.nome1')
       const sobrenome = form.querySelector('.nome2')
       const peso = form.querySelector('.peso')
       const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()

