var alumnos = prompt("Ingrese numero de alumnos")
var cantidad = 0
for(var i = 0; i < alumnos; i++){
    var edad = parseInt(prompt("Ingrese edad"))
    document.write("Edad alumno ", i+1 ," : ", edad, "<br>")  
    if (edad > 24){
        cantidad++
    }
}
document.write("cantidad de alumnos sobre 25 años: ", cantidad)