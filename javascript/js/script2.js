var segundos = new Date().getSeconds()
document.write(segundos + "<br />");
console.log(segundos)


if (segundos <= 10) {
    document.write("El minuto esta naciendo")
    console.log("El minuto esta naciendo")
} else if ((segundos >= 11) && (segundos <= 40)) {
    document.write("El minuto esta en pleno desarrollo")
    console.log("El minuto esta en pleno desarrollo")
} else {
    document.write("El minuto esta en su fase final")
    console.log("El minuto esta en su fase final")
}
