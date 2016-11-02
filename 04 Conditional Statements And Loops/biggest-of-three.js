function biggestOfThree(input) {
    let biggest = Number(input[0]);
    for (let idx = 1; idx < 3; ++idx) {
        biggest = Math.max(Number(input[idx]), biggest);
    }

    console.log(biggest);
}
