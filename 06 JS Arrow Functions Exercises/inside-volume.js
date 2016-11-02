function lab(input) {
    let x, y, z;

    let isInside;

    for (let idx = 0; idx < input.length; idx += 3) {
        isInside = false;
        x = +input[idx];
        y = +input[idx + 1];
        z = +input[idx + 2];

        if (x >= 10 && x <= 50) {
            if (y >= 20 && y <= 80) {
                if (z >= 15 && z <= 50) {
                    isInside = true;
                }
            }
        }

        console.log(isInside ? "inside" : "outside");
    }
}
