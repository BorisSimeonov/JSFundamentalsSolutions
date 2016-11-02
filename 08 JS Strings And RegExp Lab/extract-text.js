function solution(input) {
    let matchArray = [];
    let pattern = /(\((.*?)\))/g;
    let match = pattern.exec(input[0]);

    while (match != null) {
        matchArray.push(match[2]);
        match = pattern.exec(input[0]);
    }

    console.log(matchArray.join(', '));
}
