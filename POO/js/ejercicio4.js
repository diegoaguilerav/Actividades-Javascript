class Alumno{
    nombre = ''
    rut = ''
    curso = ''
    carrera = ''
    mostrar_atributos(){
        console.log('Nombre: ',this.nombre,'\nRut: ',this.rut,'\nCurso: ',this.curso,'\nCarrera: ',this.carrera)
    }
}

var alumno1 = new Alumno()
alumno1.nombre = 'diego'
alumno1.rut = '17972512-6'
alumno1.curso = '392-B'
alumno1.carrera = 'Informatica'
alumno1.mostrar_atributos()