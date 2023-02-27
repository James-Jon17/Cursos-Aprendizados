const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefa = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}

function limpaImput() {
    inputTarefa.value = ''
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefa.appendChild(li)
    limpaImput()
    criaBotaoApagar(li)
    salvarTarefas()
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esta tárefa')
    li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.key === "Enter") {
      if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)  
    }
})

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target
    
    if(el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefas of liTarefas) {
        let tarefasTexto = tarefas.innerText
        tarefasTexto = tarefasTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefasTexto)
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefa', tarefaJSON)
    
}

function adcTaregasSalvas() {
    const tarefa = localStorage.getItem('tarefa')
    const listaDeTarefas = JSON.parse(tarefa)
    console.log(listaDeTarefas)

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adcTaregasSalvas()