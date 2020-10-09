var matrix = new Array(10)
var alternador = false

for(var i = 0; i < matrix.length; i++){
    matrix[i] = new Array(10)
    for(var j = 0; j < matrix[i].length; j++){
        (alternador)?matrix[i][j] = " 0's ":matrix[i][j] = " 1's "
        alternador = !alternador 
    }
    document.write(matrix[i], "<br>")
}
console.log(matrix)