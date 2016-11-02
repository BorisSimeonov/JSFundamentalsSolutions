function solution([text, word]) {
    let regExp = new RegExp("\\b" + word + "\\b", `gi`);
    let counter = (text.match(regExp) || []).length;
    console.log(counter);
}
