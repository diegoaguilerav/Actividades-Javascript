var hora = () => {
    var hora = (new Date().toLocaleTimeString())
    console.log(hora)
}
var fecha = () => {
    var fecha = (new Date().toLocaleDateString())
    console.log(fecha)
}
function mostrar_horario(funcion){
    funcion()
}