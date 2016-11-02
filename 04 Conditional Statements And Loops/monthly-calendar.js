function calendar([day, month, year]) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let inputDate = new Date(Number(year), Number(month) - 1, Number(day));
    let calendarDays = getDaysFromPreviousMonth(year, month);  //Array of numbers
    let daysFromPrevCount = calendarDays.length;
    let lastDayCurrent = new Date(Number(year), Number(month)).getUTCDate();
    for (let day = 1; day <= lastDayCurrent; ++day) {
        calendarDays.push(day);
    }
    let lastDayIndex = new Date(year, month).getDay();
    let daysBeforeNext = calendarDays.length;
    if (lastDayIndex != 0) {
        for (let idx = lastDayIndex, dayValue = 1; idx < 7; ++idx) {
            calendarDays.push(dayValue++);
        }
    }

    let htmlResult = `<table>\n`;
    htmlResult += createHeader(days);

    let position = 0;
    do {
        htmlResult += `  <tr>`;
        for (let dIdx = 0; dIdx < 7; ++dIdx) {
            if (position < daysFromPrevCount) {
                htmlResult += `<td class="prev-month">${calendarDays[position]}</td>`;
            }
            else if (position >= daysBeforeNext) {
                htmlResult += `<td class="next-month">${calendarDays[position]}</td>`;
            } else {
                htmlResult += (calendarDays[position] !==
                inputDate.getDate()) ? `<td>${calendarDays[position]}</td>` :
                    `<td class="today">${calendarDays[position]}</td>`;
            }
            ++position;
        }
        htmlResult += `</tr>\n`;
    } while (position < calendarDays.length);
    htmlResult += `</table>`;

    return htmlResult;

    function createHeader(days) {

        let result = `  <tr>`;
        for (let item of days) {
            result += `<th>${item}</th>`;
        }
        result += `</tr>\n`;
        return result;
    }

    function getDaysFromPreviousMonth(year, month) {
        let date = new Date(Number(year), Number(month) - 1);
        let previousDates = [];
        for (let idx = date.getDay() - 1; idx >= 0; --idx) {
            previousDates.push(date.getUTCDate() - idx);
        }

        return previousDates;
    }
}
