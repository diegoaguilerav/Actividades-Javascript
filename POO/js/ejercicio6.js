class Perro{
    nombre_raza = ''
    altura = ''
    peso = ''
    nombre = ''
    alias = ''
    ladrar(){
        console.log('WHOFF WHOFF')
    }
    mostrar_datos(){
        console.log(
            '\nNombre de la raza: ',this.nombre_raza,
            '\nNombre del perro: ', this.nombre,
            '\nAlias: ', this.alias,
            '\nAltura: ', this.altura,
            '\nPeso: ', this.peso
        )
    }
}

var emily = new Perro()
emily.nombre_raza = 'West Highland White Terrier'
emily.nombre = 'Emily'
emily.alias = 'Piti Boom'
emily.altura = '80 cm'
emily.peso = '8 kilos'

emily.ladrar()
emily.mostrar_datos()