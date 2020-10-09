var matrix = new Array(5)

for(var i = 0; i < matrix.length; i++){
    matrix[i] = new Array(5)
    for(var j = 0; j < matrix[i].length; j++){
        matrix[i][j] = " 1's "
    }
    document.write(matrix[i], "<br>")
}
console.log(matrix)