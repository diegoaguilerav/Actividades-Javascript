var numero = prompt("Ingrese un número")
var resultado = 0
var cadena = ""
for(var i = 1 ; i <= numero ; i++){
    resultado += i
    console.log (resultado)
    cadena += i + ((i==numero)?'=':'+')
}
document.write(resultado, "<br>")
document.write(cadena, resultado )