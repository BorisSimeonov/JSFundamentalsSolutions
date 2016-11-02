function solution(input) {
    let numbers = input.map(Number);
    let elementCount = numbers[0];
    numbers.splice(0, 1);

    console.log(numbers.slice(0, elementCount).join(" "));
    console.log(numbers.slice(numbers.length - (elementCount), elementCount.length).join(" "));
}
