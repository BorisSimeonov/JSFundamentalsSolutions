function solution(input) {
    let joinSymbol = input[input.length - 1];
    input.pop();
    console.log(input.join(joinSymbol));
}
