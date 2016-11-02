function triangleOfStars(input) {
    let maxSize = +input[0];
    for (let idx = 1; idx <= maxSize; ++idx) {
        console.log(Array(idx + 1).join('*'));
        if (idx == maxSize) {
            printReverse(idx);
        }
    }

    function printReverse(startValue) {
        for (let idx = startValue; idx > 1; --idx) {
            console.log(Array(idx).join('*'));
        }
    }
}
