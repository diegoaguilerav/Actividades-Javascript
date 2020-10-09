function validar(){
    var usuario = document.getElementById('input_usuario').value
    var contrasena = document.getElementById('input_contrasena').value
    var mensaje_error = document.getElementById('mensaje_error')
    var errores = ''
    var error = 0
    mensaje_error.innerHTML = ''

    if (usuario != 'usuario'){
        errores += 'Usuario incorrecto<br>'
        error++
    }
    if (contrasena != '1zapatito'){
        errores += 'Contraseña incorrecta'
        error++
    }
    if (error != 0){
        mensaje_error.innerHTML = errores
    }else{
        return true
    }
    return false
}