function solution(input) {
    let rotationCount = +input.pop();
    let buffer;

    rotationCount %= input.length;

    for (let i = 0; i < rotationCount; ++i) {
        buffer = input.pop();
        input.unshift(buffer);
    }

    console.log(input.join(' '));
}
