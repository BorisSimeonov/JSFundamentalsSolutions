function solution(input) {
    let res = [];
    getEven(input);

    function getEven(inArray) {
        let counter = 0;
        for (let x of inArray) {
            if (counter == 0 || counter % 2 === 0) {
                res.push(x);
            }
            ++counter;
        }
    }

    console.log(res.join(" "));
}
