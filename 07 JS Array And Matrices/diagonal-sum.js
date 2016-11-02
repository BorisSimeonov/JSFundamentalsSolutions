function solution(input) {
    let sumLDiag, sumRDiag;
    sumLDiag = sumRDiag = 0;
    let matrix = [];
    for (let line of input) {
        matrix.push(line.split(" ").map(Number));
    }
    let length = matrix.length;


    for (let x = 0; x < matrix.length; ++x) {
        sumLDiag += matrix[x][x];
        sumRDiag += matrix[x][length - (x + 1)];
    }
    console.log(`${sumLDiag} ${sumRDiag}`);
}
