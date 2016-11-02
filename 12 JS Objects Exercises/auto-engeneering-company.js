function solution(input) {
    let carMap = new Map();

    for (let line of input) {
        let [brand, model, quantity] = line.split(/\s+\|\s+/);
        quantity = Number(quantity);
        if (carMap.has(brand)) {
            if (carMap.get(brand).has(model)) {
                carMap.get(brand).set(model, carMap.get(brand).get(model) + quantity);
            } else {
                carMap.get(brand).set(model, quantity);
            }
        } else {
            carMap.set(brand, new Map());
            carMap.get(brand).set(model, quantity);
        }
    }

    for (let [brand, modelMap] of carMap) {
        console.log(brand);
        for (let [model, quantity] of modelMap) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
