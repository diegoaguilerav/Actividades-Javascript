//1
var nombre = "Diego Aguilera Vidal"
var edad = "28"
var correo = "diego.aguilera@outlook.com"
console.log(nombre," ", edad," ",correo)

//2
var datos = nombre + edad + correo
console.log(datos)

//3
console.log("nombre: ", nombre)
console.log("edad: ", edad)
console.log("correo: ", correo)

//4
console.log(Math.floor(Math.random()*101))

//5
var numero = Math.floor(Math.random()*10)
console.log("Numero al azar: ", numero) 
console.log(numero + " * 2 = ", numero * 2)
console.log(numero + " / 2 = ", numero / 2)
console.log(numero + " + 2 = ", numero + 2)
console.log(numero + " - 2 = ", numero - 2)

//6
var x = Math.floor(Math.random()*100)
var y = Math.floor(Math.random()*10)
console.log("Valor de X: ", x)
console.log("Valor de Y: ", y)
console.log("X * Y: ",x*y)
console.log("X / Y: ",x/y)
console.log("X + Y: ",x+y)
console.log("X - Y: ",x-y)

//7
var fecha = new Date();
console.log (fecha)
document.write (fecha.getDate()+'/');
document.write ((fecha.getMonth()+1)+'/');
document.write (fecha.getFullYear());
document.write (fecha.getHours ()+':');
document.write (fecha.getMinutes ()+':');
document.write (fecha.getSeconds());
console.log(fecha)