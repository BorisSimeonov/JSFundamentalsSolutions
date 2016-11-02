function solution(input) {
    let productHolder = [];
    let productPricesByCity = {};
    let isExisting;
    //{product:, cityAndPrice}

    for (let line of input) {
        line = line.split(/\s*\|\s*/);
        if (productPricesByCity[line[1]] != undefined) {
            isExisting = false;
            for (let idx = 0; idx < productPricesByCity[line[1]].length; ++idx) {
                if (productPricesByCity[line[1]][idx].city == line[0]) {
                    productPricesByCity[line[1]][idx].price = Number(line[2]);
                    isExisting = true;
                }
            }

            if (!isExisting) {
                productPricesByCity[line[1]].push({"city": line[0], "price": Number(line[2])});
            }
        } else {
            productPricesByCity[line[1]] = [];
            productPricesByCity[line[1]].push({"city": line[0], "price": Number(line[2])});
            productHolder.push(line[1]);
        }
    }


    let lowestObject;
    for (let product of productHolder) {
        lowestObject = undefined;
        for (let obj of productPricesByCity[product]) {
            if (lowestObject == undefined) {
                lowestObject = obj;
            } else if (lowestObject.price > obj.price) {
                lowestObject = obj;
            }
        }
        console.log(`${product} -> ${lowestObject.price} (${lowestObject.city})`);
    }
}
