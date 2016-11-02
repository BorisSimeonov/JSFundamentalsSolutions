function lab(input) {
    let locations = input.map(Number);
    let getDistance = function (x, y, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x), 2) + Math.pow(y2 - y, 2));
    };

    let distances = [];
    distances[0] = getDistance(locations[0], locations[1], locations[2], locations[3]); // 1<->2
    distances[1] = getDistance(locations[4], locations[5], locations[0], locations[1]); // 3<->1
    distances[2] = getDistance(locations[2], locations[3], locations[4], locations[5]); // 2<->3

    let objectsArray = [];
    objectsArray.push({value: 0, name: "1->2->3", length: distances[0] + distances[2]});
    objectsArray.push({value: 1, name: "1->3->2", length: distances[1] + distances[2]});
    objectsArray.push({value: 2, name: "2->1->3", length: distances[0] + distances[1]});
    objectsArray.push({value: 3, name: "2->3->1", length: distances[2] + distances[1]});

    let shortest = function (objectsArray) {
        let buffer = objectsArray[0];
        for (let i = 1; i < objectsArray.length; ++i) {
            if (buffer.length > objectsArray[i].length) {
                buffer = objectsArray[i];
            }
        }
        return buffer;
    }(objectsArray);


    console.log(shortest.name + ": " + shortest.length);
}
