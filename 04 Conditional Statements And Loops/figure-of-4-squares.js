function figureOf4Squares(input) {
    let size = Number(input[0]);
    let rowSize = (size % 2 == 0) ? size - 1 : size;
    let colSize = (2 * size) - 1;

    for (let row = 0; row < rowSize; ++row) {
        if (row == 0 || row == (rowSize - 1) || row == parseInt(rowSize / 2)) {
            console.log(`+${Array(size - 1).join("-")}+${Array(size - 1).join("-")}+`);
        } else {
            console.log(`|${Array(size - 1).join(" ")}|${Array(size - 1).join(" ")}|`);
        }
    }
}
