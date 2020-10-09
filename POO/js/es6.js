import {Arroz, Tomate, Pan} from './herencia.js'

var tomate_cherry = new Tomate('tomate grande', 1000, 'cherry')
tomate_cherry.mostrar_datos()

var pan_marraqueta = new Pan('marraqueta', 800)
pan_marraqueta.mostrar_datos()

var arroz = new Arroz('Tucapel', 2000, 2)
arroz.mostrar_datos()