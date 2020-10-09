var numero = []
var contador = 0
for(var i = 0; i < 10; i++){
    numero.push(Math.floor((Math.random()*5)+1))
    if (numero[i] == 3){
        contador++
    } 
}
console.log(numero)
console.log('El numero de 3 es: ', contador)