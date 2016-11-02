function solution(input) {
    let townsAndPopulation = {};
    let townNames = [];
    for (let line of input) {
        line = line.split(/\s+<->\s+/);
        if (townsAndPopulation[line[0]] != undefined) {
            townsAndPopulation[line[0]] += Number(line[1]);
        } else {
            townsAndPopulation[line[0]] = Number(line[1]);
            townNames.push(line[0]);
        }
    }

    for (let town of townNames) {
        console.log(`${town} : ${townsAndPopulation[town]}`);
    }
}
