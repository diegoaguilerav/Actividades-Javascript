window.addEventListener('keydown', mover)
gato.onkeydown = mover
var x = 20
var y = 20
var velocidad = 20

function mover(evento){
    if (evento.key =='w'){
        //y--
        y -= velocidad
    }else if (evento.key =='s'){
        //y++
        y += velocidad
    }else if (evento.key =='a'){
        //x--
        x -= velocidad
    }else if (evento.key =='d'){
        //x++
        x += velocidad
    }
    gato.style.left = x + 'px'
    gato.style.top = y + 'px'
}
