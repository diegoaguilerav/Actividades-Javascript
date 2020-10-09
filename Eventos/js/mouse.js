var div = document.getElementById('id_div')
div.onmousemove = mostrar_coordenadas
/*div = document.getElementById('id_div')
div.document.addEventListener('mousemove', () => {
    div.innerText = evento.offsetX + ', ' + evento.offsetY
})*/

function mostrar_coordenadas(evento){
    div.innerText = evento.offsetX + ', ' + evento.offsetY
}

var div2 = document.getElementById('id_div2')
div2.onwheel = cambiar_tamano
var tamano = 16

function cambiar_tamano(evento){
    (evento.deltaY > 0)?tamano--:tamano++
    div2.style.fontSize = tamano + 'px'
}