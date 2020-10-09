class Personaje {
    constructor(vida, caminar, dano) {
        this.vida = vida
        this.caminar = caminar
        this.dano = dano
    }
    mover_personaje(){
        console.log(this.caminar)
    }
}

class Personaje_principal extends Personaje{
    constructor(vida, caminar, dano, correr, saltar){
        super(vida, caminar, dano)
        this.correr = correr
        this.saltar = saltar
    }
}

class Enemigo1 extends Personaje{
    constructor(vida, caminar, dano){
        super(vida, caminar, dano)
    }
}
class Jefe1 extends Personaje{
    constructor(vida, caminar, dano){
        super(vida, caminar, dano)
    }
}
class Etapa{
    constructor(nivel, tamano, tipo){
        this.nivel = nivel
        this.tamano = tamano
        this.tipo = tipo
    }
}

var direccion = 'control'

var etapa1 = new Etapa (1,'grande','tierra')
console.log(etapa1)
var etapa2 = new Etapa (2,'mediana','agua')
console.log(etapa2)
var mario = new Personaje_principal(10, direccion, 5, 'cuadrado', 'x')
console.log(mario)
var koopa = new Enemigo1(10,'automatico',2)
console.log(koopa)
var bowser = new Jefe1(100,'automatico',5)
console.log(bowser)