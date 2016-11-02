function solution(input) {
    let step = input[input.length - 1];
    input.pop();
    let nextStep = 0;
    for (let i = 0; i < input.length; ++i) {
        if (i === nextStep) {
            nextStep += +step;
            console.log(input[i]);
        }
    }
}
