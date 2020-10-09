var matrix = new Array(10)
var largo = 3
for(var i = 0; i < matrix.length; i++){
    matrix[i] = new Array(largo)
    for(var j = 0; j < matrix[i].length; j++){
        matrix[i][j] = i
    }
    largo++
}
console.log(matrix)

for(var i = 3; i < (matrix.length + 3); i++){
    matrix[i-3] = new Array(i)
    for(var m = 0; m < matrix[i-3].length; m++){
        matrix[i-3][m] = i-3
    }
}
console.log(matrix)
