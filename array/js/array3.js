var numeros = []
var largo = Math.floor(Math.random()*20)
for(var i=0 ; i <= largo; i+=2){
    numeros.push(i)
}
/*console.log('largo: ',(largo == 0)? 1: largo)*/
console.log('largo: ', largo)
for (pares of numeros){
    console.log(pares)
}