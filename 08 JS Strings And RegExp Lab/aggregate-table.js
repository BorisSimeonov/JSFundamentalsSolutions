function solution(input) {
    let cityArr = [];
    let sum = 0;
    let buffer = [];
    let counter = 0;
    for (let i = 0; i < input.length; ++i) {
        buffer = input[i].split('|');
        for (let idx = 0; idx < buffer.length; ++idx) {
            if (buffer[idx].length > 0) {
                if (counter == 0 || counter % 2 == 0) {
                    cityArr.push(buffer[idx].trim());
                }
                else {
                    sum += +buffer[idx];
                }
                counter++;
            }
        }
    }

    console.log(cityArr.join(', '));
    console.log(sum);
}
