var numero = prompt("Ingrese un número")
var espar = true
while (numero > 0){
    espar = !espar
    numero--
}
document.write(espar? "Es par":"Es impar")