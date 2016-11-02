function solution(input) {
    function multiply(input, some) {
        let buffer = input.split(/\s*\*\s*/);
        return +buffer[0] * +buffer[1];

    }

    let test = /(\-?[0-9]+)\s*(\*)\s*(\-?[0-9]+(?:\.[0-9]+){0,1})/g;
    input[0] = input[0].replace(test, multiply);
    console.log(input[0]);
}
