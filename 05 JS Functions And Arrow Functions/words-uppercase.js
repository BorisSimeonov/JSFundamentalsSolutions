function wordsUppercase([inputLine]) {
    let wordArray = inputLine.match(/\b[\w\d]+\b/g);
    for (let idx = 0; idx < wordArray.length; ++idx) {
        wordArray[idx] = wordArray[idx].toUpperCase();
    }
    console.log(wordArray.join(', '));
}
