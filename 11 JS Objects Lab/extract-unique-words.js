function solution(input) {
    let wordHolder = [];
    input.map((text) => {
        return text.toLowerCase();
    })
        .join(" ").match(/[a-z]+/g)
        .forEach(word => {
            if (wordHolder.indexOf(word) == +-1) {
                wordHolder.push(word);
            }
        });

    console.log(wordHolder.join(', '));
}
