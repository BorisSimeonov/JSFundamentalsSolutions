function roundIt(input) {
    let number = Number(input[0]);
    let precision = Number(input[1]);

    if (precision > 15) {
        precision = 15;
    }

    result = Math.round(
        number * Math.pow(10, precision)) /
        Math.pow(10, precision);
    console.log(result);
}
