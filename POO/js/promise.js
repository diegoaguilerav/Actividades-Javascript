function asincrona(){
    return new Promise((resuelta, fallo) => {
        setTimeout(()=>{
            resuelta = ('La funcion a finalizado')
        }, 3000)
    })
}

async function llamar(){
    
}