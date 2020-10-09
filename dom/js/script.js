function validar_edad(){

    var elemento = document.getElementById('edad')
    var edad = elemento.value
    var mensaje 
    /*console.log(elemento)
    console.log(edad)*/
    if (isNaN(edad)){
        mensaje = 'Solo numeros porfa'
    }else {
        if (edad >= 18){
            mensaje ='Es mayor de edad'
        }else{
            mensaje = 'Es menor de edad'
        }
    }
    document.getElementById('mensaje').innerText = mensaje
}

function mostrar_hora(){
    var hora = (new Date().toLocaleTimeString())
    document.getElementById('hora').innerText = hora
}

function mensaje(){
    var palabras = ['Hola','como','caminar','piscina','en','abajo','de'] 
    var tag = document.getElementsByTagName('div')
    var indice = 0
    for (p of tag){
        indice = Math.floor(Math.random()*palabras.length)
        p.innerText = palabras[indice]
    }
}

function mensaje2(){
    var palabras = ['Hola','como','caminar','piscina','en','abajo','de'] 
    var tag = document.getElementsByTagName('div')
    var indice = 0
    var numeroclase = ""
    for (var i = tag.length-1; i >= 0; i--){
        indice = Math.floor(Math.random()*palabras.length)
        numeroclase = Math.floor((Math.random()*5)+1)
        tag[i].innerText = palabras[indice]
        tag[i].className = ('div' + numeroclase)
    }
}