function figureArea(input) {
    var width_one, height_one, width_two, height_two;
    width_one = Number(input[0]);
    height_one = Number(input[1]);
    width_two = Number(input[2]);
    height_two = Number(input[3]);

    var areaOne = width_one * height_one;
    var areaTwo = width_two * height_two;
    var sharedArea = Math.min(width_one, width_two) * Math.min(height_one, height_two);

    console.log((areaOne + areaTwo) - sharedArea);
}
