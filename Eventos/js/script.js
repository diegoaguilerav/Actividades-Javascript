var input = document.getElementById('id_input')
input.onkeydown = manejar_key_down
input.onkeyup = manejar_key_up

function manejar_key_down(evento){
    console.log(evento.key)
}

function manejar_key_up(evento){
    console.log(evento.key)
}


//ejercicio 1

var input1 = document.getElementById('id_input1')
var mensaje = document.getElementById('mensaje')
input1.onkeyup = key_up

function key_up(){
    //alert('Alguien presiono algo')
    mensaje.innerText = 'Alguien presiono algo'
    setTimeout(() => {
        mensaje.innerText = ''
    },1000)
}


var input2 = document.getElementById('id_input2')
input2.onkeyup = key_up2

function key_up2(evento){
    alert(evento.key)
}

var input3 = document.getElementById('id_input3')
input3.onblur = mostrar

function mostrar(){
    console.log(input3.value)
}
/*var input3 = document.getElementById('id_input3').addEventListener("keyup",key_down3)
var valor = document.getElementById('id_input3')

function key_down3(evento){
    console.clear()
    if (evento.keyCode == '08' ){
        console.log(valor.value)   
    }else{
        console.log(valor.value)
    }  
}*/

var input4 = document.getElementById('id_input4')
input4.onkeyup = letra

function letra(evento){
    if (evento.key == 'x'){
        input4.value = ''
    }
}