var azar = () => {
    var nombres = ['Mario','puede','necesita','correr','jugar','caminar','Pepe'] 
    var indice = Math.floor(Math.random()*7)
    console.log(nombres[indice])
}

function string_azar (funcion){
    funcion()
}