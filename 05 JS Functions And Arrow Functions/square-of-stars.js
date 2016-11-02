function rectangleOfStars(input) {
    let recSize = +input[0] || 5;

    for (let idx = 1; idx <= recSize; ++idx) {
        console.log(Array(recSize + 1).join('* ').trim());
    }
}
