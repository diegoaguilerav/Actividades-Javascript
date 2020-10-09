function validar_form2_1(){
    var texto = document.getElementById('texto').value
    alert(texto)
    return false
}
function validar_form2_21(){
    var frase = ['se aman','se toleran','se odian','se desean']
    var indice = Math.floor(Math.random()*frase.length)
    var nombre1 = document.getElementById('nombre1').value
    var nombre2 = document.getElementById('nombre2').value
    alert(nombre1 + ' y ' + nombre2 + ' ' + frase[indice])
    return false
}

function validar_form2_22(){
    var frase = ['se aman','se toleran','se desean','se atraen','se quieren','se desprecian','se odian','se detestan']
    var frase_positiva = ['por eso se acompañan','por eso sueñan los mismo sueños','por eso quieren vivir juntos', 'por eso se juntan despues de clases']
    var frase_negativa = ['por eso se hacen magia negra', 'por eso se evitan','por eso nunca se juntan']
    var indice = Math.floor(Math.random()*frase.length)
    var nombre1 = document.getElementById('nombre1').value
    var nombre2 = document.getElementById('nombre2').value
    var frase_comparacion = ['se desprecian','se odian','se detestan']
    for (var i = 0; i < frase_comparacion.length; i++){
        if (frase[indice] == frase_comparacion[i]){
            frase_comparacion = 'negativa'
        }
    }
    if (frase_comparacion == 'negativa'){
        var indice2 = Math.floor(Math.random()*frase_negativa.length)
        alert(nombre1 + ' y ' + nombre2 + ' ' + frase[indice] + ' ' + frase_negativa[indice2])
    }else{
        var indice2 = Math.floor(Math.random()*frase_positiva.length)
        alert(nombre1 + ' y ' + nombre2 + ' ' + frase[indice] + ' ' + frase_positiva[indice2])
    }
    return false
}

function validar_form2_3(){
    var numero1 = parseInt(document.getElementById('numero1').value)
    var numero2 = parseInt(document.getElementById('numero2').value)
    var operador = document.getElementById('operador').value
    var operacion = document.getElementById('operacion')
    var resultado = 0
    console.log(operador)
    if (operador == 'suma'){
        operador = ' + '
        resultado = numero1 + numero2
    }else if (operador == 'resta'){
        operador = ' - '
        resultado = numero1 - numero2
    }else if (operador == 'multiplicacion'){
        operador = ' * '
        resultado = numero1 * numero2
    }else if (operador == 'division'){
        operador = ' / '
        resultado = numero1 / numero2
    }
    operacion.innerText = numero1 + operador + numero2 + " = " + resultado
    return false
}