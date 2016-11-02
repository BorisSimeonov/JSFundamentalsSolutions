function solution(input) {
    let reg = RegExp("^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$");
    let match = input[0].match(reg);

    console.log(match != null ? "Valid" : "Invalid");
}
