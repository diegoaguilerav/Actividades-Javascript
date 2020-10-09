var numero = prompt("Ingrese un número")
var espar = true
for (i=numero; i > 0; i--){
    /*if (i == 1) {
        document.write("Es impar")
    }else if (i == 0){
        document.write("El numero es par")
    }*/
    espar = !espar
}
document.write(espar? "Es par":"Es impar")

/*for (var i=0; i<=numero; i++) {
    resultado = ((numero%2 == 0)?'<br>PAR':'<br>IMPAR')*/