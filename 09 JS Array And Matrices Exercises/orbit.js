function solution(input) {
    let dimentions = input[0].split(/\s+/).map(Number);
    let maxChanges = dimentions[0] * dimentions[1];
    let start = input[1].split(/\s+/).map(Number);
    let matrix = [];
    let counter = 1;
    for (let row = 0; row < dimentions[0]; ++row) {
        matrix.push(new Array(dimentions[1]));
    }

    matrix[start[0]][start[1]] = counter;
    let distance = 1;
    let hasChanges = false;
    let changesMade = 1;
    do {
        for (let row = 0; row < matrix.length; ++row) {
            for (let col = 0; col < matrix[row].length; ++col) {
                if (matrix[row][col] == undefined) {
                    if (row - 1 >= 0) {
                        if (matrix[row - 1][col] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                        if (col - 1 >= 0 &&
                            matrix[row - 1][col - 1] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                        if (col + 1 >= 0 &&
                            matrix[row - 1][col + 1] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                    }
                    if (row + 1 < matrix.length) {
                        if (matrix[row + 1][col] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                        if (col - 1 >= 0 &&
                            matrix[row + 1][col - 1] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                        if (col + 1 >= 0 &&
                            matrix[row + 1][col + 1] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                    }
                    if (col + 1 < matrix[row].length) {
                        if (matrix[row][col + 1] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            continue;
                        }
                    }
                    if (col - 1 >= 0) {
                        if (matrix[row][col - 1] == counter) {
                            matrix[row][col] = counter + 1;
                            ++changesMade;
                            hasChanges = true;
                            continue;
                        }
                    }
                }
            }
        }
        ++counter;
    } while (changesMade < maxChanges);


    for (let line of matrix) {
        console.log(line.join(" "));
    }
}
