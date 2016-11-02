function solution(input) {
    let container = [];
    let counter = 0;

    for (let i = 0; i < input.length; ++i) {
        ++counter;
        if (input[i] === "add") {
            container.push(counter);
        } else {
            container.pop();
        }
    }

    console.log(container.length > 0 ? container.join('\n') : "Empty");
}
