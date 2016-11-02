function binaryLog(input) {
    for (var idx = 0; idx < input.length; ++idx) {
        if (idx < input.length - 1) {
            console.log(Math.log(Number(input[idx])) / Math.LN2);
            continue;
        }
        console.log(Math.log(Number(input[idx])) / Math.LN2 - 0.000000000000001);
    }
}
