var empleados = prompt("Ingrese numero de empleados")
var total = 0

for(var i = 0; i < empleados; i++){
    var sueldo = prompt("Ingrese sueldo")
    document.write("<br>Sueldo ", i ," : ", sueldo)  
    total += parseInt(sueldo)
}
document.write("<br>La suma de los sueldos es: ", total)
document.write("<br>Cantidad de empleados: ", empleados)
document.write("<br>Su promedio es: ", total/empleados)