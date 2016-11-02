function checkPrime(input) {
    var number = Number(input[0]);
    var isPrime = true;
    for (var i = 2; i < Math.sqrt(number); ++i) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (number <= 1) {
        isPrime = false;
    }
    console.log(isPrime.toString());
}
