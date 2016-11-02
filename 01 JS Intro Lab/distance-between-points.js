function distanceBetweenPoints(input) {
    "use strict";
    var pointOne = {x: Number(input[0]), y: Number(input[1])};
    var pointTwo = {x: Number(input[2]), y: Number(input[3])};

    var distance = Math.sqrt(Math.pow((pointOne.x - pointTwo.x), 2) + Math.pow((pointOne.y - pointTwo.y), 2));
    console.log(distance);
}