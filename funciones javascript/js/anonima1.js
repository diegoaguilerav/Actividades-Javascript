var hora = function (){
    var hora = (new Date().toLocaleTimeString())
    console.log(hora)
}

function mostrar_hora(funcion){
    funcion()
}