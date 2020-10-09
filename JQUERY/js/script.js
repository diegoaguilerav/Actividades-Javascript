/*

Escribir en el html

$(document).ready(function(){
    var div = $('#id_div')
    div.text('ADIOS')
})

$(document).ready(function(){
    $('#id_div').text('HOLO')
})*/

/**
 
Eliminar un elemento
  

$(function () {
    $('#id_boton').click(function () {
        $('#id_div').remove()
    })
})
 */



$(function () {
    $('#id_boton').click(function () {
        $('#id_div').before('<button>ANTES</button>')
        $('#id_div').after('<button>DESPUES</button>')
        $('#id_div').append('<button>DENTRO</button>')
        $('#id_div').wrap('<div style= "border: solid 1px red";>WRAP</div>')
    })
})