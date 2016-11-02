function dayOfWeek(input) {
    let dayName = input[0];
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let matchIndex = weekDays.indexOf(dayName);

    if (matchIndex >= 0) {
        console.log(matchIndex + 1);
    } else {
        console.log('error');
    }
}
