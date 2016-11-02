function gradsToDegrees(input) {
    let gradValue = Number(input[0]);

    let degreeValue = 0.9 * gradValue;
    if (degreeValue > 0) {
        degreeValue %= 360;
    }
    else {
        degreeValue = (degreeValue % 360) + 360;
    }
    console.log(degreeValue);
}
