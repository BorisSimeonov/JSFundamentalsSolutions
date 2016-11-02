function solution(input) {
    let text = input[0];
    input.splice(0, 1);
    let regPatt;

    for (let i = 0; i < input.length; ++i) {
        regPatt = new RegExp(input[i], 'g');
        text = text.replace(regPatt, ("-".repeat(input[i].length)));
    }

    console.log(text);
}
