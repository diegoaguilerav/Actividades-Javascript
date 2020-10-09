var fecha = new Date()
document.write("Hora: " , fecha.getHours (),', Minutos: ' , fecha.getMinutes (),', Segundos: ' , fecha.getSeconds())


var numero = prompt("Ingrese un número")
console.log("Numero: ", numero)
if (isNaN (numero)){
    console.log("Por favor ingresa sólo números")
}else{
    console.log("Numero Elevado a si mismo: ", (numero**numero))
}


var numero2
numero = (Math.floor((Math.random()*100)+1))
numero2 = (Math.floor((Math.random()*100)+1))
console.log("Numeros aleatorios: ", numero," y ", numero2) 
console.log(""+ numero + numero2)
console.log(numero.toString() + numero2.toString())


