function ageFilter(input) {
    var minAge = Number(input[0]);
    var nameBuffer;
    var ageBuffer;
    for (var idx = 1; idx < input.length - 1; idx += 2) {
        nameBuffer = input[idx];
        ageBuffer = input[idx + 1];
        if (ageBuffer >= minAge) {
            console.log("{ name: '" + nameBuffer + "', age: " + ageBuffer + " }");
        }
    }
}
