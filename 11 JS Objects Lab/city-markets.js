function solution(input) {
    let townsAndProducts = {};
    let townNames = [];
    let productsByTown = {};
    let priceSumBuffer;
    for (let line of input) {
        line = line.split(/\s+->\s+/);
        priceSumBuffer = line[2].split(/\s*:\s*/).map(Number);
        priceSumBuffer = priceSumBuffer[0] * priceSumBuffer[1];
        //console.log(line);
        if (townsAndProducts[line[0]] != undefined) {
            townsAndProducts[line[0]][line[1]] = priceSumBuffer;
            productsByTown[line[0]].push(line[1]);
        } else {
            townsAndProducts[line[0]] = {};
            townsAndProducts[line[0]][line[1]] = priceSumBuffer;
            productsByTown[line[0]] = [];
            productsByTown[line[0]].push(line[1]);
            townNames.push(line[0]);
        }
    }

    for (let town of townNames) {
        console.log(`Town - ${town}`);
        for (let product of productsByTown[town]) {
            console.log(`$$$${product} : ${townsAndProducts[town][product]}`);
        }
    }
}
