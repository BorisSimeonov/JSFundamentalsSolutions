function chessBoard(input) {
    var size = Number(input[0]);
    var black = "    <span class=\"black\"></span>";
    var white = "    <span class=\"white\"></span>";
    var startingColor = white;
    var previousColor = white;

    console.log("<div class=\"chessboard\">");
    for (var outer = 0; outer < size; ++outer) {
        if (startingColor === white) {
            previousColor = startingColor;
            startingColor = black;
        } else {
            previousColor = black;
            startingColor = white;
        }
        console.log("<div>");
        for (var inner = 0; inner < size; ++inner) {
            if (previousColor === white) {
                console.log(black);
                previousColor = black;
            } else {
                console.log(white);
                previousColor = white;
            }
        }
        console.log("</div>");
    }
    console.log("</div>");
}
