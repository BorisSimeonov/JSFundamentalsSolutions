function solution(input) {
    let matrix = [];
    let value;
    let buffer;
    let bufferSum;
    let isMagical = true;

    for (let line of input) {
        bufferSum = 0;
        buffer = line.split(/\s+/).map(Number);
        matrix.push(buffer);
        buffer.forEach(getRowSum);
        if (value == undefined) {
            value = bufferSum;
        } else {
            if (bufferSum != value) {
                isMagical = false;
            }
        }
    }

    for (let col = 0; col < matrix[0].length; ++col) {
        bufferSum = 0;
        for (let row = 0; row < matrix.length; ++row) {
            bufferSum += matrix[row][col];
        }

        if (bufferSum != value) {
            isMagical = false;
            break;
        }
    }


    console.log(isMagical);


    function getRowSum(input) {
        bufferSum += input;
    }
}
