function solution(input) {
    let matrix = [];
    let diagonalValue;
    let sameDiagonals = false;


    for (let line of input) {
        matrix.push(line.split(/\s+/).map(Number));
    }

    diagonalValue = sumLeftDiag();


    if (diagonalValue !== sumRightDiag()) {
        printMatrix(matrix);
    } else {
        for (let row = 0; row < matrix.length; ++row) {
            for (let col = 0; col < matrix[0].length; ++col) {
                if (row !== col && row + col !== matrix[0].length - 1) {
                    matrix[row][col] = diagonalValue;
                }
            }
        }
        printMatrix(matrix);
    }


    function sumLeftDiag() {
        let sum = 0;
        for (let col = 0; col < matrix[0].length; ++col) {
            sum += matrix[col][col];
        }
        return sum;
    }

    function sumRightDiag() {
        let sum = 0;
        for (let col = matrix[0].length - 1; col >= 0; --col) {
            sum += matrix[matrix[0].length - (1 + col)][col];
        }
        return sum;
    }

    function printMatrix(matrixValue) {
        for (let line of matrixValue) {
            console.log(line.join(" "));
        }
    }
}
