class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrar_datos(){
        console.log(this.nombre, this.precio)
    }
}
export class Pan extends Producto {

}
export class Arroz extends Producto {
    constructor(nombre, precio, grado){
        super(nombre, precio)
        this.grado = grado
    }
    mostrar_datos(){
        console.log(this.nombre, this.precio, this.grado)
        super.mostrar_datos()
        console.log(this.grado)
    }
}
class Tallarin extends Producto {

}
export class Tomate extends Producto {
    constructor(nombre, precio, tipo){
        super(nombre, precio)
        this.tipo = tipo
    }
    mostrar_datos(){
        console.log(this.nombre, this.precio, this.tipo)
    }
}

/********************************
 * 
 * VAMOS A PROBAR LAS CLASES
 * 
 ********************************/

 var tomate_cherry = new Tomate('tomate grande', 1000, 'cherry')
 tomate_cherry.mostrar_datos()

 var pan_marraqueta = new Pan('marraqueta', 800)
 pan_marraqueta.mostrar_datos()

 var arroz = new Arroz('Tucapel', 2000, 2)
 arroz.mostrar_datos()