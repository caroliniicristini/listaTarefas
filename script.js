let lista = []

function addTask(){

  const titulo = document.getElementById('titulo').value
  const tipo = document.getElementById('tipo').value

  if(titulo && tipo){
    lista.push({titulo, tipo})
    atualizaTasks()
  }
}

function atualizaTasks(listaFiltrada){
  const tasksContainer = document.getElementById('tarefas')
  tasksContainer.innerHTML = ''

  const tipoTarefa = ['urgente', 'Prioritario', 'Normal']

  for(let i = 0; i < tipoTarefa.length; i++){

    const type = tipoTarefa[i]

    for(let t = 0; t < (listaFiltrada || lista).length; t++) {
  
      const tarefa = (listaFiltrada || lista)[t]

      if(tarefa.tipo.toLowerCase() === type.toLowerCase()){
        const container = document.createElement('div')
        container.textContent = `${tarefa.titulo}`

        const delButton = document.createElement('button')
        delButton.textContent = 'Excluir'
        delButton.className = 'btnExcluir'


      

        delButton.onclick = function() {
          removerTarefa(tarefa)
        }
    
        container.appendChild(delButton);
        tasksContainer.appendChild(container)
   

      }
    }
  }
}

function removerTarefa(tarefa) {
    const index = lista.indexOf(tarefa)

    if(index !== -1) {
      lista.splice(index, 1)
      //splice remove um elemento do array
      atualizaTasks()
    }
}

function search(){

  const inputFilter = document.getElementById('filter').value;

  const pesquisa = lista.filter(tarefa => tarefa.titulo.toLowerCase().includes(inputFilter))
 //filter cria um novo array com os elementos que passaram no teste
 //includes determina se um array tem um determinado elemento, retornando true ou false
  atualizaTasks(pesquisa)

}



















