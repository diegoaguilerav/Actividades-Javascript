function validar() {
    var nombre = document.getElementById('input_nombre').value
    var valor = document.getElementById('input_valor').value
    var cantidad = document.getElementById('input_cantidad').value
    var cliente = document.getElementById('input_cliente').value
    var email = document.getElementById('input_email').value
    var mensaje = document.getElementById('mensaje_errores')
    var total = document.getElementById('mensaje_total')
    var descuento = document.getElementById('mensaje_descuento')
    var final = document.getElementById('mensaje_total_final')
    var titulo = document.getElementById('titulo')
    var descuento_compra = 0
    var error = 0
    var mensaje_errores = '' 
    titulo.innerText = ''
    mensaje.innerText = ''
    total.innerText = ''
    descuento.innerText = ''
    final.innerText = ''

    if (nombre.length == 0) {
        mensaje_errores += 'Debe ingresar un nombre\n'
        error++
    }
    if (valor.length == 0) {
        mensaje_errores += 'Debe ingresar un valor válido\n'
        error++
    } else if (isNaN(valor)) {
        mensaje_errores += 'Debe ingresar un valor numérico válido\n'
        error++
    }
    if (cantidad.length == 0) {
        mensaje_errores += 'Debe ingresar una cantidad válida\n'
        error++
    } else if (isNaN(cantidad)) {
        mensaje_errores += 'Debe ingresar una cantidad numérica válida\n'
        error++
    }
    if (cliente.length == 0) {
        mensaje_errores += 'Debe ingresar un nombre de cliente\n'
        error++
    }
    if (email.length == 0) {
        mensaje_errores += 'Debe ingresar un email\n'
        error++
    }

    if (error == 0) {
        titulo.innerText = 'Cotización'
        total.innerText = 'Total: ' + (valor * cantidad)
        if (cantidad >= 5) {
            descuento.innerText = 'Descuento 10%'
            descuento_compra = 0.9
        } else {
            descuento.innerText = 'Descuento 0%'
            descuento_compra = 1
        }
        final.innerText = 'Total a pagar: ' + ((valor * cantidad) * descuento_compra)
    }else{
        titulo.innerText = 'Corrija estos errores'
        mensaje.innerText = mensaje_errores
    }

    return false
}