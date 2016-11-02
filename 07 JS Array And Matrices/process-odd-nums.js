function solution(input) {
    let numbers = input.map(Number);
    let result = [];

    for (let i = 0; i < numbers.length; ++i) {
        if (i == 1 || i % 2 != 0) {
            result.push(numbers[i] * 2);
        }
    }
    console.log(result.reverse().join(" "));
}
