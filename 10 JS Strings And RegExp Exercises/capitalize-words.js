function solution(input) {
    let holder = input[0].split(/\s+/);
    let buffer;
    let result = [];
    for (let word of holder) {
        buffer = word.toLowerCase().split('');
        buffer[0] = buffer[0].toUpperCase();
        result.push(buffer.join(''));
    }
    console.log(result.join(" "));
}
