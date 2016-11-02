function solution(input) {
    let buffer;
    let match;
    for (let line of input) {
        buffer = [];
        match = line.match(/^([A-Z][a-zA-Z]*)\s[–\-]\s([1-9][0-9]*)\s[–\-]\s([A-Za-z0-9 -]+)$/);
        if (match != null) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${+match[2]}`);
        }
    }
}
