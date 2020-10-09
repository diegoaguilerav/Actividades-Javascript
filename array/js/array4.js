var arreglo = []
var espar = true
for (var i = 0; i < 20; i++){
    numero = Math.floor(Math.random()*20)
    numero_copia = numero
    while (numero_copia > 0){
        espar = !espar
        numero_copia--
    }
    if (espar){
        arreglo.push(numero)
    }
    espar = true
}
for (par of arreglo){
    console.log(par)
}