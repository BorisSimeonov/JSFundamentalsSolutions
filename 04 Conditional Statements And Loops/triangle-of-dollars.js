function triangleOfDollars(input) {
    let maxSize = Number(input[0]);
    for (let i = 1; i <= maxSize; ++i) {
        console.log(Array(i + 1).join('$'));
    }
}
