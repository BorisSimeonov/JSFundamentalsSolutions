function solution(input) {
    let numbers = input.map(Number);
    let result = [];
    sortBySign(numbers);


    function sortBySign(someInp) {
        for (let x of someInp) {
            if (x < 0) {
                result.unshift(x);
            } else {
                result.push(x);
            }
        }
    }

    console.log(result.join("\n"));
}
