function solution(input) {
    let reg = RegExp("([\_A-Za-z0-9]+)", 'g');
    let match = input[0].match(reg);
    console.log(match.join("|"));
}
