/*var numeros = []

for(var i = 0 ; i < 25; i++){
    numeros.push(i)
}
console.log(numeros)
for(i = (numeros.length-1) ; i >= 0; i--){
    console.log(numeros[i])
}*/

var indices = new Array(25)

for(var i = 0 ; i < indices.length; i++){
    indices[i] = i  
}

for(i = (indices.length-1) ; i >= 0; i--){
    console.log(indices[i])
}