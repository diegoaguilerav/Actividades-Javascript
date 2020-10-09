
function validar_datos(){
    var nombre = document.getElementById('nombre').value
    var mensaje = document.getElementById('nombre_mensaje')
    if (nombre.length != 0){
        mensaje.innerText = ('el nombre es ' + nombre)
        mensaje.style.color = 'green'
        return true
    }else{
        mensaje.innerText = ('Por favor ingrese un nombre')
        mensaje.style.color = 'red'
        return false
    }
}

function validar_datos2(){
    /*Valida nombre*/
    var nombre = document.getElementById('nombre2').value
    var mensaje = document.getElementById('nombre_mensaje2')
    var nombre_validacion = false
    mensaje.style.color = 'red'
    if (isNaN(nombre)){
        if (nombre == null || nombre.length == 0 || /^$|\s/.test(nombre)){
            mensaje.innerText = ('Por favor ingrese un nombre valido')  
        }else{
            mensaje.innerText = ''
            nombre_validacion = true
        }
    }else{
        mensaje.innerText = 'Ingrese solo letras'
    }

    /*Valida edad*/
    var edad = document.getElementById('edad').value
    var mensaje = document.getElementById('edad_mensaje')
    mensaje.style.color = 'red'
    var edad_validacion = false
    if (!isNaN(edad)){
        if ((edad > 18) && (edad < 99)){
            mensaje.innerText = ''
            edad_validacion = true
        }else{
            mensaje.innerText = 'Ingrese edad valida'  
        }
    }else{
        mensaje.innerText = 'Ingrese solo numeros'
    }
    /*Validacion general*/
    if ((nombre_validacion == true) && (edad_validacion == true)){
        return true
    }else{
        return false
    }
}

function validar_datos3(){
    var nombre = document.getElementById('nombre3').value
    var mensaje = document.getElementById('nombre_mensaje3')
    var nombre_validacion = false
    mensaje.style.color = 'red'
    if (isNaN(nombre)){
        if (nombre == null || nombre.length == 0 || /^$|\s/.test(nombre)){
            mensaje.innerText = ('Por favor ingrese un nombre valido')  
        }else{
            mensaje.innerText = ''
            nombre_validacion = true
        }
    }else{
        mensaje.innerText = 'Ingrese solo letras'
    }
    /*Validacion contraseña*/
    var contrasena = document.getElementById('contrasena').value
    var mensaje = document.getElementById('contrasena_mensaje')
    var contraseña_validacion = false
    console.log(contrasena)
    if (contrasena != 'enterthematrix'){
        mensaje.style.color = 'red'
        mensaje.innerText = 'contraseña incorrecta'
    }else{
        mensaje.innerText = ''
        contraseña_validacion = true
    }
    if ((nombre_validacion == true) && (contraseña_validacion == true)){
        return true
    }else{
        return false
    }
}

function validar_datos4(){
    var hola = document.getElementById('hola')
    var que = document.getElementById('que')
    var tal = document.getElementById('tal')
    var festival = document.getElementById('festival')
    var mensaje = ""
    if(hola.checked == true){
        mensaje += (hola.value + " ")
    }
    if(que.checked == true){
        mensaje += (que.value + " ")
    }
    if(tal.checked == true){
        mensaje += (tal.value + " ")
    }
    if(festival.checked == true){
        mensaje += festival.value
    }
    console.log(mensaje)
    document.getElementById('check_mensaje').innerText = mensaje
}


/***************************************/


function validar_datos_profe(){
    var nombre = document.getElementById('nombre').value
    var mensaje = document.getElementById('nombre_mensaje')
    if (nombre.length == 0){
        mensaje.innerText = ('Ingrese un nombre')
        mensaje.style.color = 'red'
    }else {
        mensaje.innerText = ('el nombre es ' + nombre)
        mensaje.style.color = 'green'
    }
    return false
}

function validar_datos_profe2(){
    var nombre = document.getElementById('nombre2').value.trim()
    var mensaje = document.getElementById('nombre_mensaje2')
    var edad = document.getElementById('edad').value
    var mensaje2 =document.getElementById('edad_mensaje')
    var cont = 0
    mensaje.innerText = ''
    mensaje2.innerText = ''
    console.log(nombre)
    if (nombre.length == 0){
        return false
    }else{
        for (var i = 0; i < nombre.length; i++){
            if (nombre[i] == " "){
                cont++   
            }
            console.log(cont)
            if (cont == 1){
                mensaje.innerText = 'Ingresa un texto valido'
                return false
            }
        }
    }if (edad.length == 0){
        mensaje2.innerText = 'Ingresa una edad porfavor'
        return false
    }else{
        if ((edad < 18) || (edad > 99)){
            mensaje2.innerText = 'Ingresa una edad valida'
            return false
        }
    }
    return true
}

function validar_datos_profe3(){
    var nombre = document.getElementById('nombre3').value
    var contrasena = document.getElementById('contrasena').value
    var mensaje = document.getElementById('nombre_mensaje3')
    var mensaje2 = document.getElementById('contrasena_mensaje')
    mensaje.innerText = "" 
    mensaje2.innerText = ""
    var cont = 0
    if (nombre.length == 0){
        return false
    }else{
        for (var i = 0; i < nombre.length; i++){
            if (nombre[i] == " "){
                cont++   
            }
            console.log(cont)
            if (cont == 1){
                mensaje.style.color = 'red'
                mensaje.innerText = 'Ingresa un texto valido'
                return false
            }
        }
    }
    console.log(contrasena)
    if (contrasena != 'enterthematrix'){
        mensaje2.style.color = 'red'
        mensaje2.innerText = 'contraseña incorrecta'
        return false
    }
    return true
}
