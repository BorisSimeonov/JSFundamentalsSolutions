function solution(input) {
    let townsPair = {};
    for (let idx = 0; idx < input.length; idx += 2) {
        if (townsPair[input[idx]] != undefined) {
            townsPair[input[idx]] += Number(input[idx + 1]);
        } else {
            townsPair[input[idx]] = Number(input[idx + 1]);
        }
    }
    console.log(JSON.stringify(townsPair));
}
