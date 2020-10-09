var boton = document.getElementById('id_button')
boton.onclick = pulsar

function pulsar() {
    alert('PORFIADO')
}

//EJERCICIO 2

var div = document.getElementById('id_div')
div.onclick = pulsar_div

function pulsar_div() {
    alert('ERA MENTIRA JIJIJI')
}

//EJERCICIO 4

var div4 = document.getElementById('id_div4')
div4.onclick = pulsardiv4

function pulsardiv4() {
    div4.innerText = 'NO TAN FUERTE'
}

//EJERCICIO 5

var parrafo1 = document.getElementById('id_parrafo1')
var parrafo2 = document.getElementById('id_parrafo2')
parrafo1.onclick = pulsarparrafo1
parrafo2.onclick = pulsarparrafo2

function pulsarparrafo1() {
    parrafo1.innerText = 'AQUÍ NO...'
    parrafo2.innerText = 'ACÁ!!!'
}
function pulsarparrafo2() {
    parrafo2.innerText = 'Gracias'
}

//EJERCICIO 6

var div6 = document.getElementById('id_div6')
var parrafo6 = document.getElementById('parrafo_6')
div6.onmousemove = mostrar_coordenadas

function mostrar_coordenadas(evento) {
    parrafo6.innerHTML = evento.offsetX + ', ' + evento.offsetY
}

//Ejercicio 7

var span = document.getElementsByTagName('span')
for (var i = 0; i < span.length; i++) {
    span[i].innerText = '*'
    span[i].style.left = Math.floor(Math.random() * 600) + 'px'
    span[i].style.top = Math.floor(Math.random() * 200) + 'px'
}
function borrarspan(id) {
    //alert(id);
    if (id == 'span1'){
        span1.innerText = ''
    }else if (id == 'span2'){
        span2.innerText = ''
    }else if (id == 'span3'){
        span3.innerText = ''
    }else if (id == 'span4'){
        span4.innerText = ''
    }else if (id == 'span5'){
        span5.innerText = ''
    }else if (id == 'span6'){
        span6.innerText = ''
    }else if (id == 'span7'){
        span7.innerText = ''
    }else if (id == 'span8'){
        span8.innerText = ''
    }else if (id == 'span9'){
        span9.innerText = ''
    }
}











/*var span1 = document.getElementById('span1')
span1.style.left = Math.floor(Math.random() * 600) + 'px'
span1.style.top = Math.floor(Math.random() * 200) + 'px'
span1.innerText = '*'
span1.onclick = borrarclick
var span2 = document.getElementById('span2')
span2.style.left = Math.floor(Math.random() * 600) + 'px'
span2.style.top = Math.floor(Math.random() * 200) + 'px'
span2.innerText = '*'
span2.onclick = borrarclick
var span3 = document.getElementById('span3')
span3.style.left = Math.floor(Math.random() * 600) + 'px'
span3.style.top = Math.floor(Math.random() * 200) + 'px'
span3.innerText = '*'
span3.onclick = borrarclick
var span4 = document.getElementById('span4')
span4.style.left = Math.floor(Math.random() * 600) + 'px'
span4.style.top = Math.floor(Math.random() * 200) + 'px'
span4.innerText = '*'
span4.onclick = borrarclick
var span5 = document.getElementById('span5')
span5.style.left = Math.floor(Math.random() * 600) + 'px'
span5.style.top = Math.floor(Math.random() * 200) + 'px'
span5.innerText = '*'
span5.onclick = borrarclick
var span6 = document.getElementById('span6')
span6.style.left = Math.floor(Math.random() * 600) + 'px'
span6.style.top = Math.floor(Math.random() * 200) + 'px'
span6.innerText = '*'
span6.onclick = borrarclick
var span7 = document.getElementById('span7')
span7.style.left = Math.floor(Math.random() * 600) + 'px'
span7.style.top = Math.floor(Math.random() * 200) + 'px'
span7.innerText = '*'
span7.onclick = borrarclick
var span8 = document.getElementById('span8')
span8.style.left = Math.floor(Math.random() * 600) + 'px'
span8.style.top = Math.floor(Math.random() * 200) + 'px'
span8.innerText = '*'
span8.onclick = borrarclick
var span9 = document.getElementById('span9')
span9.style.left = Math.floor(Math.random() * 600) + 'px'
span9.style.top = Math.floor(Math.random() * 200) + 'px'
span9.innerText = '*'
span9.onclick = borrarclick

function borrarclick(evento){
    if (evento.onclick == span9.onclick){
        alert('hola')
    }
}*/
