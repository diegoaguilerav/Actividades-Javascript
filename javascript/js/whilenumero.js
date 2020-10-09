var numero = parseInt(prompt("Ingrese un numero entre 1 y 100: "))
var numero_aleatorio = Math.floor((Math.random()*100)+1)

while (numero != numero_aleatorio){
    numero = parseInt(prompt((numero>numero_aleatorio)?("Ingrese un numero menor: "):("Ingrese un numero mayor: ")))
}
document.write("El numero era ", numero_aleatorio)