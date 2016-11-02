function oddEven(input) {
    var num = Number(input[0]);

    if (num % 1 > 0 || num % 1 < 0) {
        console.log("invalid");
    } else if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
