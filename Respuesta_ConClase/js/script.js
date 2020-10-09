var arreglo_clientes = new Array() //ARREGLO PARA ALMACENAR CLIENTES

/*****************************************************************
 * Cliente DEFINE A UN CLIENTE Y TODOS SUS DATOS
 ******************************************************************/
class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}
/*****************************************************************
 * agregar() AGREGA UN NUEVO CLIENTE AL ARREGLO DE CLIENTES
 *           LOS DATOS NOMBRE Y EDAD LOS EXTRAE DEL FORMULARIO
 ******************************************************************/
function agregar() { 
    var texto_nombre  = document.getElementById('id_nombre').value //OBTENEMOS EL NOMBRE
    var texto_edad    = document.getElementById('id_edad').value //OBTENEMOS LA EDAD
    var cliente = new Cliente(texto_nombre, texto_edad)//CREAMOS UN OBJETO (CON CLASE) CON AMBOS DATOS
    arreglo_clientes.push(cliente) //INGRESAMOS EL OBJETO AL ARREGLO DE CLIENTES
    document.getElementById('id_nombre').value = '' //VACIAMOS EL INPUT NOMBRE PARA INGRESAR UN NUEVO CLIENTE
    document.getElementById('id_edad').value = ''   //VACIAMOS EL INPUT EDAD PARA INGRESAR UN NUEVO CLIENTE
    return false //RETORNAMOS false PARA QUE NO SE REINICIE LA PÁGINA AL HACER SUBMIT
}
/*****************************************************************
 * mostrar() MUESTRA EN UN DIV TODOS LOS CLIENTES 
 *           QUE EXISTAN EN EL ARREGLO DE CLIENTES
 ******************************************************************/
function mostrar() { 
    var div_clientes = document.getElementById('id_lista_clientes') // OBTENEMOS EL <DIV> DONDE LISTAREMOS LOS CLIENTES
    var texto = '' // ACUMULADOR DE TEXTO: ACÁ IREMOS AGREGANDO LOS DATOS DE CADA CLIENTE
    for(cliente of arreglo_clientes) { // RECORREMOS EL ARREGLO arreglo_clientes
        texto += 'Nombre: ' + cliente.nombre + ', Edad: ' + cliente.edad + '<BR>' // ACUMULAMOS LOS DATOS DE CADA CLIENTE
    }
    div_clientes.innerHTML = texto //FINALMENTE MOSTRAMOS EL TEXTO (CON TODOS LOS CLIENTES) EN EL <DIV>
}