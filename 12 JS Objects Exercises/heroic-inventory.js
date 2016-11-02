function solution(input) {
    let heroes = [];
    for (let line of input) {
        let [name, level, items] = line.split(/\s+\/\s+/);
        if (items == undefined) {
            heroes.push({name: name, level: Number(level), items: []});
        } else {
            items = items.split(/,\s+/);
            heroes.push({name: name, level: Number(level), items: items});
        }
    }
    console.log(JSON.stringify(heroes));
}
