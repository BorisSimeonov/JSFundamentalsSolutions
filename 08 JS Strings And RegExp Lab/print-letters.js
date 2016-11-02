function solution(input) {
    let counter = -1;
    for (let char of input[0]) {
        console.log(`str[${++counter}] -> ${char}`);
    }
}
