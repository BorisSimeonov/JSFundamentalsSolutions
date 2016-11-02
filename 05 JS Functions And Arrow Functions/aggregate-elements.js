function aggregateElements(input) {
    function sum(num_arr) {
        let sum = 0;
        for (let num of num_arr) {
            sum += +num;
        }
        return sum;
    }
    function inverseSum(num_arr) {
        let sum = 0.0;
        for (let num of num_arr) {
            sum += 1 / (+num);
        }
        return sum;
    }

    console.log(sum(input));
    console.log(inverseSum(input));
    console.log(input.join(''));
}
