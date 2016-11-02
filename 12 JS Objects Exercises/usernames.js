function solution(input) {
    let usernameSet = new Set();

    for (let word of input) {
        usernameSet.add(word);
    }
    let arr = Array.from(usernameSet);

    arr.sort(function (a, b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
    });

    console.log(arr.join('\n'));
}
