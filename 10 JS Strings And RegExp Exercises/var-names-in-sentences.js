function solution(input) {
    let result = [];
    let match;
    let regExp = /\b_([A-Za-z0-9]+)\b/g;
    match = regExp.exec(input[0]);
    while (match != null) {
        result.push(match[1]);
        match = regExp.exec(input[0]);
    }

    console.log(result.join(","));
}
