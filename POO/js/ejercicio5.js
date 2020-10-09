class BandaMusical {
    nombre = ''
    estilo_musica = ''
    numero_integrantes = ''
    nacionalidad = ''
    nombre_integrantes = []
    mostrar_datos() {
        console.log('\nNombre: ', this.nombre, '\nEstilo: ', this.estilo_musica, '\nNúmero integrantes: ', this.numero_integrantes, '\nNacionalidad: ', this.nacionalidad, '\nNombre de los integrantes: ', this.nombre_integrantes)
    }
}
/*
//Instancia 1
var coldplay = new BandaMusical()
coldplay.nombre = 'Coldplay'
coldplay.estilo_musica = 'Pop Rock'
coldplay.numero_integrantes = '5'
coldplay.nacionalidad = 'Londres, Inlgaterra'
coldplay.nombre_integrantes = ['Chris Martin', 'Jonny Buckland', 'Will Champion', 'Guy Berryman', 'Phil Harvey']
coldplay.mostrar_datos()

//Instancia 2
var linkin = new BandaMusical()
linkin.nombre = 'Linkin Park'
linkin.estilo_musica = 'Rock'
linkin.numero_integrantes = '5'
linkin.nacionalidad = 'California, USA'
linkin.nombre_integrantes = ['Mike Shinoda','Brad Delson','Dave Farrel','Joe Hahn','Rob Bourdon']
linkin.mostrar_datos()

//Función para mostrar nombres
function nombres_integrantes(nombre_banda){
    var integrantes = ''
    for(var i = 0; i < nombre_banda.nombre_integrantes.length; i++){
        integrantes += nombre_banda.nombre_integrantes[i]+'\n'
    }
    console.log('Nombres de integrantes de', nombre_banda.nombre)
    console.log(integrantes)
}

//Nombres integrantes desde función
nombres_integrantes(coldplay)
nombres_integrantes(linkin)

*/
//Parte 2
class BandaMusical2 {
    constructor(nombre, estilo_musica, numero_integrantes, nacionalidad, nombre_integrantes, albumes) {
        this.nombre = nombre
        this.estilo_musica = estilo_musica
        this.numero_integrantes = numero_integrantes
        this.nacionalidad = nacionalidad
        this.nombre_integrantes = nombre_integrantes
        this.albumes = albumes
    }
    mostrar_datos() {
        console.log('\nNombre: ', this.nombre, '\nEstilo: ', this.estilo_musica, '\nNúmero integrantes: ', this.numero_integrantes, '\nNacionalidad: ', this.nacionalidad, '\nNombre de los integrantes: ', this.nombre_integrantes, '\nAlbumes: ', this.albumes)
    }
    mostrar_albumes() {
        console.log(this.albumes)
    }
}

var albumes = ['Let it be','Abbey Road','The Beatles','Magical Mistery Tour','Sgt. Pepper','Revolver']
var the_beatles = new BandaMusical2('The Beattles', 'Todos', 5, 'UK', 4, albumes)
the_beatles.mostrar_datos()
the_beatles.mostrar_albumes()