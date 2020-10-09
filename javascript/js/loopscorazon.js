var numero = prompt("Ingrese un número")
var numero_anterior = 1
var numero_mostrar = 0

if (isNaN(numero)) {
    document.write("Ingrese un numero por favor")
}else {
    for ( ; (numero_mostrar <= numero); ) {
        document.write(numero_mostrar, " ")
        numero_mostrar = numero_mostrar + numero_anterior
        numero_anterior = numero_mostrar - numero_anterior
    }
}