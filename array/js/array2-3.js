var numero = []
do{
    ingresar = prompt('Ingrese un numero o escribe fin para terminar')
    if (ingresar != 'fin'){
        numero.push('<p>'+ingresar+'</p>')
    }
}while(ingresar != 'fin')
console.log(numero)