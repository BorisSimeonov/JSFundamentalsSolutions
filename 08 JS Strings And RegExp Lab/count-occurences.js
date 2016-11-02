function solution(input) {
    let match;
    let re = new RegExp(input[0]);
    let counter = 0;

    while ((match = re.exec(input[1])) != null) {
        ++counter;
        input[1] = input[1].substr(match.index + 2);
    }
    console.log(counter);
}
