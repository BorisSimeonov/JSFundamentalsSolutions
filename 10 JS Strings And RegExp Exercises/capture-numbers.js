function solution(input) {
    let result = [];
    let match;

    for (let line of input) {
        match = line.match(/[0-9]+/g);
        if (match != null) {
            for (let item of match) {
                result.push(item);
            }
        }
    }
    console.log(result.join(" "));
}
