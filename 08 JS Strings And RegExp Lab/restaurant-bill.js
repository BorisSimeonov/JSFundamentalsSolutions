function solution(input) {
    let purchase = [];
    let sum = 0;

    for (let i = 0; i < input.length; ++i) {
        if (i == 0 || i % 2 == 0) {
            purchase.push(input[i]);
        }
        else {
            sum += +input[i];
        }
    }

    console.log(`You purchased ${purchase.join(', ')} for a total sum of ${sum}`);
}
