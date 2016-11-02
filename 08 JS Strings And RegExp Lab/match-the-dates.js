function solution(input) {
    let match;
    let buffer;

    for (let line of input) {
        match = line.match(/\b[0-9]{1,2}\-[A-Z][a-z]{2}\-[0-9]{4}\b/g);
        if (match != null) {
            for (let date of match) {
                buffer = date.split(/-/);
                console.log(`${date} (Day: ${buffer[0]}, Month: ${buffer[1]}, Year: ${buffer[2]})`);
            }
        }
    }
}
