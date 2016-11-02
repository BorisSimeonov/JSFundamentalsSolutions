function solution(input) {
    let lastValue;
    input = input.map(Number);
    function getBigger(number) {
        if (lastValue == undefined || lastValue <= number) {
            lastValue = number;
            return true;
        }
        return false;
    };
    console.log(input.filter(getBigger).join('\n'));
}
