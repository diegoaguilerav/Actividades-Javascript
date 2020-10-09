class ClienteDeRetail {
    constructor(nombre, rut, edad, nombre_tienda, cupo_tarjeta, lista_compras) {
        this.nombre = nombre
        this.rut = rut
        this.edad = edad
        this.nombre_tienda = nombre_tienda
        this.cupo_tarjeta = cupo_tarjeta
        this.lista_compras = lista_compras
    }
    comprar(producto){
        console.log('Comprando: ', producto)
        this.lista_compras = producto
    }
    mostrar_datos(){
        console.log(this.nombre, this.rut, this.edad, this.nombre_tienda, this.cupo_tarjeta, this.lista_compras)
    }
}

class ClienteDeCuentaRut {
    constructor(nombre, rut, edad) {
        this.nombre = nombre
        this.rut = rut
        this.edad = edad
    }

    mostrar_saldo() {
        console.log('El saldo de la cuenta es: ', saldo)
    }
    girar() {
        var cantidad = prompt('Cuanto desea girar?')
        saldo -= cantidad
    }
}

var cliente_retail = new ClienteDeRetail('Javier', 12121231, 20, 'Falabella', 40000, 3)
cliente_retail.mostrar_datos()
cliente_retail.comprar('Zapato')
cliente_retail.mostrar_datos()