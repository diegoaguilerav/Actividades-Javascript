$(document).ready(function(){
    $('body').append('<div id="formulario"></div>')
    $('#formulario').append('<label for="nombre">Nombre</label><br><input type="text" id="id_nombre"><br>')
    $('#formulario').append('<label for="correo">Correo electronico</label><br><input type="text" id="id_correo"><br>')
    $('#formulario').append('<label for="asunto">Asunto</label><br><input type="text" id="id_asunto"><br>')
    $('#formulario').append('<label for="mensaje">Mensaje</label><br><textarea id="id_mensaje"></textarea><br>')
    $('#formulario').append('<br><input type="submit" value="Enviar datos" style= "background-color: green; color: white;"><br>')
    $('#formulario').append('<br><button id="resetear" style= "background-color: green; color: white;">Resetear</button')
})

$('#resetear').click(function(){
    /*$('id_nombre').value('')
    $('id_correo').value('')
    $('id_asunto').value('')
    $('id_mensaje').value('')*/
    $('#formulario').reset()
})