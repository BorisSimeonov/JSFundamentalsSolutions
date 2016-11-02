function lab(input) {


    let checkIsland = function (x, y, xMin, xMax, yMin, yMax, islandName) {
        "use strict";
        if (x >= xMin && x <= xMax) {
            if (y >= yMin && y <= yMax) {
                console.log(islandName);
                return false;
            }
        }
        return true;
    };

    let valueIsSet;
    for (let i = 0; i < input.length - 1; i += 2) {
        valueIsSet = true;
        valueIsSet = checkIsland(+input[i], +input[i + 1], 1, 3, 1, 3, "Tuvalu");
        if (valueIsSet) {
            valueIsSet = checkIsland(+input[i], +input[i + 1], 0, 2, 6, 8, "Tonga");
        }
        if (valueIsSet) {
            valueIsSet = checkIsland(+input[i], +input[i + 1], 5, 7, 3, 6, "Samoa");
        }
        if (valueIsSet) {
            valueIsSet = checkIsland(+input[i], +input[i + 1], 4, 9, 7, 8, "Cook");
        }
        if (valueIsSet) {
            valueIsSet = checkIsland(+input[i], +input[i + 1], 8, 9, 0, 1, "Tokelau");
        }
        if (valueIsSet) console.log("On the bottom of the ocean");
    }
}
