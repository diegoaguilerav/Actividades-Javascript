var numero = new Array(15)
var indice = 0

for(var i = 0; i < numero.length; i++){
    numero[i] = (Math.floor((Math.random()*10)+1))
}
document.write(numero, '<br>')

do{
    indice = numero.indexOf(3)
    if (indice == -1){break}
    numero.splice(indice, 1)
}
while(indice != -1)

document.write(numero, '<br>')

do{
    indice = numero.indexOf(7)
    if (indice == -1){break}
    numero.splice(indice, 1)
}
while(indice != -1)

document.write(numero)