var empleados = prompt("Ingrese numero de empleados")
var total = 0, sueldo = 0, i = 1

while(i <= empleados){
    sueldo = prompt("Ingrese sueldo")
    document.write("Sueldo ", i," : ", sueldo,"<br>")  
    total += parseInt(sueldo)
    i++
}
document.write("<br>La suma de los sueldos es: ", total)
document.write("<br>Cantidad de empleados: ", empleados)
document.write("<br>Su promedio es: ",(empleados!=0)?total/empleados:0)