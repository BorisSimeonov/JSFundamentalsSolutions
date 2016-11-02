function solution(textLines) {
    let match;
    for (let line of textLines) {
        match = line.match(/(w{3}(\.[a-zA-Z0-9-]+)(?:\.[a-z]+){1,})/g);
        if (match != null) {
            console.log(match.join("\n"));
        }
    }
}
