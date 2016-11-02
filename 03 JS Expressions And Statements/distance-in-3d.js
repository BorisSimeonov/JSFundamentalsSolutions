function distanceIn3D(input) {
    let pOne = {x: Number(input[0]), y: Number(input[1]), z: Number(input[2])};
    let pTwo = {x: Number(input[3]), y: Number(input[4]), z: Number(input[5])};
    let distance = Math.sqrt(
        Math.pow((pOne.x - pTwo.x), 2) +
        Math.pow((pOne.y - pTwo.y), 2) +
        Math.pow((pOne.z - pTwo.z), 2)
    );
    console.log(distance);
}
