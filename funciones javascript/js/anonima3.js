var hora = function (){
    var hora = (new Date().toLocaleTimeString())
    console.log(hora)
}
var fecha = function (){
    var fecha = (new Date().toLocaleDateString())
    console.log(fecha)
}
function mostrar_horario(funcion){
    funcion()
}