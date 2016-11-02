function solution(input) {
    let name = input[0];
    let email = input[1];
    let phone = input[2];
    input.splice(0, 3);

    for (let line of input) {
        line = line.replace(/\<\![a-zA-Z]+\!\>/g, name);
        line = line.replace(/\<\@[a-zA-Z]+\@\>/g, email);
        line = line.replace(/\<\+[a-zA-Z]+\+\>/g, phone);

        console.log(line);
    }
}
