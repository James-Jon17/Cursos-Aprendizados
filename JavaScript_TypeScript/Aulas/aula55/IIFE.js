(function(idade, peso, altura){
    const sobrenome = 'Miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Jota'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80)