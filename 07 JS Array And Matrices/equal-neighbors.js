function solution(input) {
    let neighboursCount = 0;
    let matrix = [];

    for (let line of input) {
        matrix.push(line.split(" "));
    }

    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[0].length; ++col) {
            if (row != matrix.length - 1 &&
                matrix[row][col] == matrix[row + 1][col]) {
                neighboursCount++;

            }
            if (col != 0 && matrix[row][col] == matrix[row][col - 1]) {
                neighboursCount++;
            }
        }
    }
    console.log(neighboursCount);
}
