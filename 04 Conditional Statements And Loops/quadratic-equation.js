function quadricEquasions(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let d = Math.pow(b, 2) - (4 * a * c);


    if (d < 0) {
        console.log('No');
        return;
    }
    else if (d == 0) {
        console.log((-b) / (2 * a));
        return;
    }
    else {
        console.log(((-b) - Math.sqrt(d)) / (2 * a));
        console.log(((-b) + Math.sqrt(d)) / (2 * a));
    }
}
