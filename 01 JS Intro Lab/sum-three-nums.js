function sumNumbers(input) {
    var result = 0;
    for(var idx = 0; idx < 3; ++idx) {
        result += Number(input[idx]);
    }
    console.log(result);
}
