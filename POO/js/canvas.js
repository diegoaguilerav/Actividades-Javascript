class Rectangulo{
    constructor(alto, ancho, x, y, color){
        this.alto = alto
        this.ancho = ancho
        this.x = x
        this.y = y
        this.lienzo = document.getElementById('id_canvas').getContext('2d')
        this.color = color    
    }
    dibujar(){
        this.lienzo.fillStyle = this.color
        this.lienzo.fillRect(this.x, this.y,this.ancho,this.alto)
    }
    limpiar_lienzo(){
        this.lienzo.clearRect(0, 0, 300, 150)
    }
}

var rect1 = new Rectangulo(10, 20, 50, 25, 'red')
var rect2 = new Rectangulo(20, 50, 150, 75, 'blue')

function dibujar_cuadros(){
    rect1.limpiar_lienzo()
    rect1.x = Math.floor(Math.random() * 300)
    rect1.y = Math.floor(Math.random() * 150)
    rect1.dibujar()
    rect2.x = Math.floor(Math.random() * 300)
    rect2.y = Math.floor(Math.random() * 150)
    rect2.dibujar()
}

function nieve_espacial(){
    setInterval(() => {
        dibujar_cuadros()
    }, 500);
}