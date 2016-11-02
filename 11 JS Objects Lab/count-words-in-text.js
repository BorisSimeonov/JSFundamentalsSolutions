function solution(input) {
    input = input[0].match(/[A-Za-z0-9_]+/g);
    let wordPair = {};
    for (let idx = 0; idx < input.length; idx++) {
        if (wordPair[input[idx]] != undefined) {
            ++wordPair[input[idx]];
        } else {
            wordPair[input[idx]] = 1;
        }
    }
    console.log(JSON.stringify(wordPair));
}
