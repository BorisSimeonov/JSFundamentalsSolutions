function leapYear(input) {
    var year = Number(input[0]);
    var isLeap = false;
    if ((year % 4 === 0 && year % 100 !== 0) ||
        year % 400 === 0) {
        isLeap = true;
    }
    console.log((isLeap) ? "yes" : "no");
}