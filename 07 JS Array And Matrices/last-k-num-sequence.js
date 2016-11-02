function solution(input) {
    let numbers = input.map(Number);
    let result = [];
    let next;
    for (let idx = 0; idx < numbers[0]; ++idx) {
        next = 0;
        if (idx == 0) {
            next = 1;
        } else {
            for (let arrIdx = idx - 1; arrIdx >= 0; --arrIdx) {
                if (arrIdx < idx - numbers[1]) {
                    break;
                } else {
                    next += result[arrIdx];
                }
            }
        }

        result.push(next);
    }
    console.log(result.join(" "));
}
