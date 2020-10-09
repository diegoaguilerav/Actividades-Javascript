function validar() {
    var nombre = document.getElementById('nombre').value
    var correo = document.getElementById('email').value
    var contrasena = document.getElementById('password').value
    var numero_palabras = 0
    var numero_arroba = 0
    var verdadero = 0
    var mensaje = ""
    if (nombre.length != 0) {
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i] == " ") {
                numero_palabras++
            }
        } if (numero_palabras > 1) {
            mensaje = document.getElementById('mensaje_nombre')
            mensaje.style.color = 'red'
            mensaje.innerText = "Solo debe ingresar 2 palabras"

        } else {
            mensaje = document.getElementById('mensaje_nombre')
            mensaje.innerText = ""
            verdadero++
            console.log(verdadero)
        }
    }

    if (correo.length != 0) {
        for (var i = 0; i < correo.length; i++) {
            if (correo[i] == '@') {
                numero_arroba++
            }
        } if (numero_arroba != 1){
            mensaje = document.getElementById('mensaje_correo')
            mensaje.style.color = 'red'
            mensaje.innerText = "Solo debe ingresar 1 @"
        }else {
            mensaje = document.getElementById('mensaje_correo')
            mensaje.innerText = ""
            verdadero++
            console.log(verdadero)
        }
    }

    if (contrasena.length != 0) {
        if (contrasena != '1zapato.') {
            mensaje = document.getElementById('mensaje_contrasena')
            mensaje.style.color = 'red'
            mensaje.innerText = 'Ingrese una contraseña correcta'

        } else {
            mensaje = document.getElementById('mensaje_contrasena')
            mensaje.innerText = ""
            verdadero++
            console.log(verdadero)
        }
    }
    console.log(verdadero)
    if (verdadero == 3) {
        return true
    } else {
        return false
    }
}