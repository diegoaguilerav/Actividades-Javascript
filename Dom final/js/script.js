function validar_datos() {
    var nombre = document.getElementById('nombre').value
    var mensaje = document.getElementById('nombre_mensaje')
    if (nombre.length == 0) {
        mensaje.innerText = ('Ingrese un nombre')
        mensaje.style.color = 'red'
    } else {
        mensaje.innerText = ('el nombre es ' + nombre)
        mensaje.style.color = 'green'
    }
    return false
}

function validar_datos_2() {
    var nombre = document.getElementById('nombre2').value
    var mensaje = document.getElementById('nombre_mensaje2')
    var edad = document.getElementById('edad').value
    var mensaje2 = document.getElementById('edad_mensaje')
    var cont = 0
    mensaje.innerText = ''
    mensaje2.innerText = ''
    console.log(nombre)
    if (nombre.length == 0) {
        mensaje.innerText = 'Ingrese un nombre porfavor'
        return false
    } else {
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i] == " ") {
                cont++
            }
            console.log(cont)
            if (cont == 1) {
                mensaje.innerText = 'Ingresa un texto valido'
                return false
            }
        }
    } if (!isNaN(edad)) {
        if (edad.length == 0) {
            mensaje2.innerText = 'Ingresa una edad porfavor'
            return false
        } else {
            if ((edad < 18) || (edad > 99)) {
                mensaje2.innerText = 'Ingresa una edad valida'
                return false
            }
        }
    } else {
        mensaje2.innerText = 'Ingresa solo numeros para la edad por favor'
        return false
    }

    return true
}

function validar_datos_3() {
    var nombre = document.getElementById('nombre3').value
    var contrasena = document.getElementById('contrasena').value
    var mensaje = document.getElementById('nombre_mensaje3')
    var mensaje2 = document.getElementById('contrasena_mensaje')
    mensaje.innerText = ""
    mensaje2.innerText = ""
    var cont = 0
    if (nombre.length == 0) {
        mensaje.innerText = 'Ingrese un nombre porfavor'
        return false
    } else {
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i] == " ") {
                cont++
            }
            console.log(cont)
            if (cont == 1) {
                mensaje.style.color = 'red'
                mensaje.innerText = 'Ingresa un texto valido'
                return false
            }
        }
    }
    console.log(contrasena)
    if (contrasena != 'enterthematrix') {
        mensaje2.style.color = 'red'
        mensaje2.innerText = 'contraseña incorrecta'
        return false
    }
    return true
}

function validar_datos_4() {
    var hola = document.getElementById('hola')
    var que = document.getElementById('que')
    var tal = document.getElementById('tal')
    var festival = document.getElementById('festival')
    var mensaje = ""
    if (hola.checked == true) {
        mensaje += (hola.value + " ")
    }
    if (que.checked == true) {
        mensaje += (que.value + " ")
    }
    if (tal.checked == true) {
        mensaje += (tal.value + " ")
    }
    if (festival.checked == true) {
        mensaje += festival.value
    }
    console.log(mensaje)
    document.getElementById('check_mensaje').innerText = mensaje
    return false
}

function validar_datos_5() {
    var nombre = document.getElementById('nombre5').value.trim()
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var mensaje = document.getElementById('nombre_mensaje5')
    var mensaje_email = document.getElementById('email_mensaje')
    var mensaje_password = document.getElementById('password_mensaje')
    var cont = 0
    mensaje.innerText = ''
    mensaje_email.innerText = ''
    mensaje_password.innerText = ''
    mensaje.style.color = 'red'
    mensaje_email.style.color = 'red'
    mensaje_password.style.color = 'red'

    //validacion nombre
    if (nombre.length == 0) {
        mensaje.innerText = 'Ingrese un nombre por favor'
        return false
    } else if (isNaN(nombre)) {
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i] == " ") {
                if (nombre[i - 1] != " ") {
                    cont++
                    console.log(cont)
                }
            }
        }
        if (cont > 1) {
            mensaje.innerText = 'Ingrese hasta 2 palabras solamente'
            return false
        }
    } else {
        mensaje.innerText = 'Ingrese solo letras'
        return false
    }

    //validacion correo
    if (email.length == 0) {
        console.log(email)
        mensaje_email.innerText = 'Ingrese un correo'
        return false
    } else {
        cont = 0
        console.log(cont)
        for (var i = 0; i < email.length; i++) {
            if (email[i] == '@') {
                cont++
                console.log(cont)
            }
        }
        if (cont > 1) {
            mensaje_email.innerText = 'El texto detras de @ no debe incluir un @'
            return false
        } else if (cont == 0){
            mensaje_email.innerText = 'Ingrese un email valido'
            return false
        }
    }

    //Validacion password
    if (password.length == 0) {
        mensaje_password.innerText = 'Ingrese una contraseña'
        return false
    } else if (password != '1zapato.') {
        mensaje_password.innerText = 'Contraseña incorrecta'
        return false
    }

    return true
}