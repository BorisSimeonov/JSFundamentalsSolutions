function lab(input) {
    let stringNum = input[0];
    let isHigherThanFive = false;
    let sumBuffer;
    do {
        sumBuffer = 0;
        for (let i = 0; i < stringNum.length; ++i) {
            sumBuffer += Number(stringNum.charAt(i));
        }
        if (sumBuffer / stringNum.length > 5) {
            isHigherThanFive = true;
        } else {
            stringNum += '9';
        }
    } while (!isHigherThanFive);
    console.log(stringNum);
}
