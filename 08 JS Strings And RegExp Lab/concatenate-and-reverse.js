function solution(input) {
    input.reverse();
    let reverseLetters = function (str) {
        return str.split('').reverse().join('');
    };
    for (let i = 0; i < input.length; ++i) {
        input[i] = reverseLetters(input[i]);
    }
    console.log(input.join(""));
}
