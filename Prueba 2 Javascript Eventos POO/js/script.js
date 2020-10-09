var lista_productos = new Array()

class Producto {
    constructor(nombre, valor, cantidad) {
        this.nombre = nombre
        this.valor = valor
        this.cantidad = cantidad
    }
    calcular_total() {
        return (this.valor * this.cantidad)
    }
}

function agregar() {
    var nombre = document.getElementById('id_nombre').value.trim()
    var valor = document.getElementById('id_valor').value.trim()
    var cantidad = document.getElementById('id_cantidad').value.trim()
    var lista_errores = document.getElementById('lista_errores')
    var errores = ''
    lista_errores.innerHTML = ''
    errores = ''

    //VALIDACIONES
    if (nombre == '') {
        errores += 'Ingrese un nombre<br>'
    }
    if (isNaN(valor) || (valor == '')) {
        errores += 'Debe ingresar un valor<br>'
    }
    if (isNaN(cantidad) || (cantidad == '')) {
        errores += 'Debe ingresar una cantidad<br>'
    }
    if (errores == '') {
        var producto = new Producto(nombre, parseInt(valor), parseInt(cantidad))
        lista_productos.push(producto) 
        document.getElementById('id_nombre').value = ''
        document.getElementById('id_valor').value = ''
        document.getElementById('id_cantidad').value = ''
    } else {
        lista_errores.innerHTML = errores
    }
    return false
}

function mostrar() {
    var lista = document.getElementById('lista')
    var texto_lista = ''
    for (producto of lista_productos){
        texto_lista += ('Nombre: '+ producto.nombre + ', Valor: ' + producto.valor + ', Cantidad: ' + producto.cantidad + ', Total: ' + producto.calcular_total() + '<br>')
    }
    lista.innerHTML = texto_lista
}