function solution(input) {
    let biggest;
    let currentRow = [];


    for (let x = 0; x < input.length; ++x) {
        currentRow = input[x].split(" ");
        for (let num of currentRow) {
            if (biggest == undefined || biggest < +num) {
                biggest = +num;
            }
        }
    }
    console.log(biggest);
}
