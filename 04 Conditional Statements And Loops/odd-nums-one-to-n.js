function oddInRange(input) {
    let upperNumber = Number(input[0]);
    for (let i = 1; i <= upperNumber; ++i) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
