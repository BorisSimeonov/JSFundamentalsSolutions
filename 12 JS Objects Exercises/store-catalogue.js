function solution(input) {
    let productMap = new Map();
    let namesArr = [];
    let lastLetter = ' ';

    for (let line of input) {
        let [productName, price] = line.split(/\s*:\s*/);
        price = Number(price);
        productMap.set(productName, price);
        namesArr.push(productName);
    }

    namesArr.sort(function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    for (let name of namesArr) {
        let initial = name[0];
        if (initial !== lastLetter) {
            lastLetter = initial;
            console.log(lastLetter);
        }
        console.log(`  ${name}: ${productMap.get(name)}`);
    }
}
