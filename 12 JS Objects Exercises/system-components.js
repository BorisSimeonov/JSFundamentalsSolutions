function solution(input) {
    let systemMap = new Map();
    let systemKeys = [];
    let componentKeys;

    for (let line of input) {
        let [system, component, subComponent] = line.split(/\s+\|\s+/);

        if (systemMap.has(system)) {
            if (systemMap.get(system).has(component)) {
                systemMap.get(system).get(component).push(subComponent);
            } else {
                systemMap.get(system).set(component, []);
                systemMap.get(system).get(component).push(subComponent);
            }
        } else {
            systemMap.set(system, new Map());
            systemMap.get(system).set(component, []);
            systemMap.get(system).get(component).push(subComponent);
            systemKeys.push(system);
        }
    }

    //console.log(aCompCount);
    systemKeys.sort(function (a, b) {
        let aCompCount = systemMap.get(a).size;
        let bCompCount = systemMap.get(b).size;

        if (aCompCount > bCompCount) return -1;
        if (aCompCount < bCompCount) return 1;
        if (aCompCount === bCompCount) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });


    for (let system of systemKeys) {
        console.log(system);
        componentKeys = [];
        for (let [key, value] of systemMap.get(system)) {
            componentKeys.push(key);
        }
        componentKeys.sort(function (a, b) {
            let aCompCount = systemMap.get(system).get(a).length;
            let bCompCount = systemMap.get(system).get(b).length;
            if (aCompCount > bCompCount) return -1;
            if (aCompCount < bCompCount) return 1;
            if (aCompCount === bCompCount) return 0;
        });
        for (let component of componentKeys) {
            console.log(`|||${component}`);
            for (let sub of systemMap.get(system).get(component)) {
                console.log(`||||||${sub}`);
            }
        }
    }
}
