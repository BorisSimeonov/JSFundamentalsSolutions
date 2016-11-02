function solution(input) {
    input = input[0].toLowerCase().match(/[A-Za-z0-9_]+/g);
    let wordPair = {};
    let keys = [];
    for (let idx = 0; idx < input.length; idx++) {
        if (wordPair[input[idx]] != undefined) {
            ++wordPair[input[idx]];
        } else {
            wordPair[input[idx]] = 1;
            keys.push(input[idx]);
        }
    }

    keys = keys.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    for (let i = 0; i < keys.length; ++i) {
        console.log(`'${keys[i]}' -> ${wordPair[keys[i]]} times`);
    }
}
