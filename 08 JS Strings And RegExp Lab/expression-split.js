function solution(input) {
    let match = input[0].match(/[^\s\,\.\(\)\;\[\]]+/g);
    console.log(match.join("\n"));
}
