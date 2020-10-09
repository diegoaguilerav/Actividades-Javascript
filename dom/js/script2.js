/*function agregar(){
    var lista = document.getElementById('lista')
    var item = document.createElement('li')
    var textodelitem = document.createTextNode('nuevo item')
    item.appendChild(textodelitem)
    lista.appendChild(item)
}*/
function agregar(){
    var elemento = document.getElementById('elementofinal')
    elemento.id = 'elemento'
    var lista = document.getElementById('lista')
    var item = document.createElement('li')
    item.appendChild(document.createTextNode('nuevo item'))
    item.id = 'elementofinal'
    lista.appendChild(item) 
}

function eliminar(){
    
    var elemento = document.getElementById('elementofinal')
    elemento.parentElement.removeChild(elemento)

    var lista = document.getElementById('lista')
    var elemento2 = document.getElementById('elemento')
    console.log(elemento)
    elemento2.id = 'elementofinal'
}
    
