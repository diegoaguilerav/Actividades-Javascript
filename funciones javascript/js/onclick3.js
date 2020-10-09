function mostrar_hora(){
    var hora = (new Date().toLocaleTimeString())
    console.log(hora)
}
function mostrar_fecha(){
    var fecha = (new Date().toLocaleDateString())
    console.log(fecha)
}