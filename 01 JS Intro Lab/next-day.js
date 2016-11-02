function nextDay(input) {
    function validateYear(yearValue) {
        if (yearValue < 1900) {
            yearValue += 1900;
        }
        return yearValue;
    }
    var dateValues = {year: validateYear(Number(input[0])), month: Number(input[1]), day: Number(input[2])};
    var initialDateString = "" + dateValues.year + "-" + dateValues.month + "-" + dateValues.day + "";
    var resultDate = new Date(initialDateString);
    resultDate.setDate(resultDate.getDate() + 1);

    console.log(resultDate.getFullYear() + "-" + (resultDate.getMonth() + 1) + "-" + resultDate.getDate());
}
