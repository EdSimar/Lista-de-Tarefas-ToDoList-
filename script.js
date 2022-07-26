const adcBotao = document.getElementById("botao")
const input = document.getElementById("box")
const lista = document.getElementById("listaOrdenada")
const item = document.getElementsByTagName("li")

//criação da lista
function criarLista(){
    const li = document.createElement("li")

    li.appendChild(document.createTextNode(input.value))
    lista.appendChild(li)
    input.value = ""

//alteração da cor ao clicar para concluir ou restabelecer a tarefa adicionada
    function mudarCor(){
        li.classList.toggle("trocaCor")
    }

    li.addEventListener("click", mudarCor)

//exclusão de item na lista
    const exclBotao = document.createElement("button")

    exclBotao.appendChild(document.createTextNode("X"))
    li.appendChild(exclBotao)

        function deletarItem(){
            li.classList.add("excluir")
        }
    
    exclBotao.addEventListener("click", deletarItem)
}

//adicionar itens na lista ao clicar no botao
function adcItemClick(){
    if(input.value.trim().length > 0){
        criarLista()
    }else{
        return input.classList.add("erro")
    }
}

adcBotao.addEventListener("click", adcItemClick)

//adicionar itens na lista ao pressionar a tecla 'Enter'
function pressEnter(){
    if(input.value.trim().length > 0 && event.which === 13){
        criarLista()
}
}

input.addEventListener("keypress", pressEnter)

//remover a classe de erro
function removeErro(){
    if(criarLista){
        return input.classList.remove("erro")
    }
}

input.addEventListener("change", removeErro)

//excluir a lista toda
const removeList = document.getElementById("removerTd")

function removeAll(){
    lista.classList.add("excluir")
}

removeList.addEventListener("click", removeAll)

//reabilitar o input, após exclusão da lista
function reabInput(){
    if(removeAll){
       return location.reload(true)
    }
}

removeList.addEventListener("click", reabInput)