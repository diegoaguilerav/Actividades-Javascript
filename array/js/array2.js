var colores = ['red', 'blue', 'yellow', 'cyan', 'violet', 'gray']
var indice = 0
for (var i = 0; i < 6; i++){
    indice = Math.floor(Math.random()*colores.length)
    document.write('<span style = "background-color:', colores[indice],'";>Hola</span>')
}