function solution(input) {
    let inputValues = input[0].split(/\s+/).map(Number);
    let size = {maxCol: inputValues[0], maxRow: inputValues[0]};
    let maxNumber = size.maxCol * size.maxRow;
    let spiralMatrix = [];
    for (let x = 0; x < size.maxRow; ++x) {
        spiralMatrix.push(new Array(size.maxCol));
    }
    let currentNumber = 1;
    let direction = "right";
    let currentRow = 0, currentCol = 0;

    while (currentNumber <= maxNumber) {
        spiralMatrix[currentRow][currentCol] = currentNumber;
        if (currentNumber === maxNumber) {
            break;
        }

        if (direction == "right") {
            if (currentCol + 1 >= size.maxCol || spiralMatrix[currentRow][currentCol + 1] != undefined) {
                direction = "down";
                continue;
            }
            ++currentCol;
        } else if (direction == "left") {
            if (currentCol - 1 < 0 || spiralMatrix[currentRow][currentCol - 1] != undefined) {
                direction = "up";
                continue;
            }
            --currentCol;
        } else if (direction == "up") {
            if (currentRow - 1 < 0 || spiralMatrix[currentRow - 1][currentCol] != undefined) {
                direction = "right";
                continue;
            }
            --currentRow;
        } else if (direction == "down") {
            if (currentRow + 1 >= size.maxRow || spiralMatrix[currentRow + 1][currentCol] != undefined) {
                direction = "left";
                continue;
            }
            ++currentRow;
        }
        ++currentNumber;
    }

    for (let line of spiralMatrix) {
        console.log(line.join(" "));
    }
}
