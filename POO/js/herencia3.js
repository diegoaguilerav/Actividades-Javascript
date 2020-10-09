class Persona{
    constructor(nombre, rut, edad){
        this.nombre = nombre
        this.rut = rut
        this.edad = edad
    }
    datos_personales(){
        console.log('Nombre:', this.nombre,'\nRut:', this.rut,'\nEdad:', this.edad)
    }
}
class ClienteDeRetail extends Persona{
    constructor(nombre, rut, edad, nombre_tienda, cupo_tarjeta, lista_compras){
        super(nombre, rut, edad)
        this.nombre_tienda = nombre_tienda
        this.cupo_tarjeta = cupo_tarjeta
        this.lista_compras = lista_compras
    }
    comprar(producto){
        console.log('Comprando: ', producto)
        this.lista_compras.push(producto)
    }
    mostrar_datos(){
        console.log(this.nombre, this.rut, this.edad, this.nombre_tienda, this.cupo_tarjeta, this.lista_compras)
    }
}

class ClienteDeCuentaRut extends Persona{
    constructor(nombre, rut, edad, numero_cuenta, saldo){
        super(nombre, rut, edad)
        this.numero_cuenta = numero_cuenta
        this.saldo = saldo
    }
    consultar_saldo(){
        console.log(this.saldo)
    }
    transferencia(transferir){
        console.log('Saldo:',this.saldo,'Monto:', transferir)
        this.saldo-=transferir
        console.log('Nuevo Saldo', this.saldo)
    }
    mostrar_datos(){
        console.log(this.nombre, this.rut, this.edad, this.numero_cuenta,this.saldo)
    }
}


/***********
 * 
 * Probando clases
 * 
************/


var lista = []
var Diego = new ClienteDeRetail('Diego','17972512-6',28,'Falabella',2000000,lista)
Diego.comprar('Polera')
Diego.comprar('Boxers')
Diego.comprar('Zapatillas')
Diego.comprar('Calcetines')
Diego.datos_personales()
Diego.mostrar_datos()

var DiegoRut = new ClienteDeCuentaRut('Diego','17972512-6',28,'17972512',2000000)
DiegoRut.mostrar_datos()
DiegoRut.transferencia(150000)
DiegoRut.mostrar_datos()