function solution(input) {
    let numbers = input.map(Number);
    let result = [];
    numbers.sort(function (a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    });

    for (let x = 0; x < numbers.length; ++x) {
        if (x == 2) {
            break;
        }

        result.push(numbers[x]);
    }

    console.log(result.join(' '));
}
