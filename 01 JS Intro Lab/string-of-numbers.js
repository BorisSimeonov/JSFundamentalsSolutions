function stringOfNumbers(input) {
    var maxNumber = Number(input[0]);
    var resultString = "";
    for (var n = 1; n <= maxNumber; ++n) {
        resultString = resultString + n;
    }
    console.log(resultString);
}
