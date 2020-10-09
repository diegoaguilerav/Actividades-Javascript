function validar() {
    var nombre                  = document.getElementById('input_nombre').value
    var quitar_espacios_blancos = nombre.trim()
    var texto_divido            = quitar_espacios_blancos.split(' ')
    var numero_palabras         = texto_divido.length
    console.log(numero_palabras)
    var correo                  = document.getElementById('input_correo').value
    var arroba                  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var clave                   = document.getElementById('input_clave').value

    // Validar nombre
    if ( (nombre != 0) && (numero_palabras <= 2) ) {
        // validar correo
        if ( (correo != 0) && (arroba.test(correo)) )  {
            // validar contraseña            
            if ( (clave != 0) && (clave === '1zapato.') ) {
                alert('Los datos son:\n\n' + quitar_espacios_blancos + '\n' + correo + '\n' + clave)
                return true
            } else {
                document.getElementById('mensaje').innerText = 'ERROR CONTRASEÑA: CAMPO VACIO ó INGRESE CONTRASEÑA CORRECTA'
            }
        } else {
            document.getElementById('mensaje').innerText = 'ERROR CORREO: CAMPO VACIO ó INGRESE FORMATO CORRECTO'
        }
    } else {
        document.getElementById('mensaje').innerText = 'ERROR NOMBRE: CAMPO VACIO ó INGRESE MÁXIMO 2 PALABRAS'
    }
    return false
}