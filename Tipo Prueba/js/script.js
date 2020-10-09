var lista = new Array()
var btn_listar = document.getElementById('listar')
btn_listar.onclick = listar_clientes_html

class Cliente{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
}

function agregar(){
    var nombre = document.getElementById('nombre').value
    var edad = document.getElementById('edad').value
    var nuevo_cliente = new Cliente (nombre, edad)
    lista.push('Nombre: '+ nombre + ', Edad: '+ edad)
    document.getElementById('nombre').value = '' //VACIAMOS EL INPUT NOMBRE PARA INGRESAR UN NUEVO CLIENTE
    document.getElementById('edad').value = ''   //VACIAMOS EL INPUT EDAD PARA INGRESAR UN NUEVO CLIENTE
    console.log(nuevo_cliente)
    console.log(lista)
    return false
}

function listar_clientes_html(){
    var listar_clientes = document.getElementById('lista_clientes')
    var lista_completa = ''
    for (var i = 0; i < lista.length; i++){
        console.log(lista[i])
        lista_completa += (lista[i] + '<br>')
    }
    listar_clientes.innerHTML = lista_completa
      
}