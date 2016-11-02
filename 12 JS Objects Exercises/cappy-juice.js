function solution(input) {
    let juiceMap = new Map();
    let bottelsMap = new Map();

    for (let line of input) {
        let [juiceName, quantity] = line.split(/\s*=>\s*/);
        quantity = Number(quantity);
        if (juiceMap.has(juiceName)) {
            juiceMap.set(juiceName, juiceMap.get(juiceName) + quantity);
        } else {
            juiceMap.set(juiceName, quantity);
        }
        //check for bottles
        if (juiceMap.get(juiceName) >= 1000) {
            let bottles = Math.floor(juiceMap.get(juiceName) / 1000);
            juiceMap.set(juiceName, juiceMap.get(juiceName) - (bottles * 1000));
            if (bottelsMap.has(juiceName)) {
                bottelsMap.set(juiceName, bottelsMap.get(juiceName) + bottles);
            } else {
                bottelsMap.set(juiceName, bottles);
            }
        }
    }

    for (let [name, bottles] of bottelsMap) {
        console.log(`${name} => ${bottles}`);
    }
}
