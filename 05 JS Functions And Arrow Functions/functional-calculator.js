function functionalCalculator([numOne, numTwo, sign]) {
    let add = function (first, second) {
        return first + second;
    };
    let subtract = function (first, second) {
        return first - second;
    };
    let multiply = function (first, second) {
        return first * second;
    };
    let divide = function (first, second) {
        return first / second;
    };

    switch (sign) {
        case '+':
            console.log(add(+numOne, +numTwo));
            break;
        case '/':
            console.log(divide(+numOne, +numTwo));
            break;
        case '*':
            console.log(multiply(+numOne, +numTwo));
            break;
        case '-':
            console.log(subtract(+numOne, +numTwo));
            break;
    }
}