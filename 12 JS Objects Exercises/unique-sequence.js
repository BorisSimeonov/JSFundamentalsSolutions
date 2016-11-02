function solution(input) {
    let arrayHolder = [];
    let sortArrayNumbers = function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };
    let checkEqual = function (input) {
        let areEqual;
        for (let array of arrayHolder) {
            areEqual = true;
            if (array.length === input.length) {
                for (let idx = 0; idx < array.length; idx++) {
                    if (array[idx] != input[idx]) {
                        areEqual = false;
                        break;
                    }
                }
            } else {
                areEqual = false;
            }
            if (areEqual) {
                return true;
            }
        }
        return false;
    };
    let isEqual;

    for (let line of input) {
        line = line.match(/[0-9.\-]+/g)
            .map(Number)
            .sort(sortArrayNumbers);
        if (arrayHolder.length === 0) {
            arrayHolder.push(line);
        }
        isEqual = checkEqual(line);
        if (!isEqual) {
            arrayHolder.push(line);
        }
    }

    arrayHolder.sort(function (a, b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        return 0;
    });

    for (let array of arrayHolder) {
        console.log(`[${array.join(', ')}]`);
    }
}
