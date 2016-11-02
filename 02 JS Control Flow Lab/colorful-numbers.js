function colorNumbers(input) {
    var maxNumber = Number(input[0]);
    var green = "green";
    var blue = "blue";

    console.log("<ul>");
    for (var num = 1; num <= maxNumber; ++num) {
        console.log("<li><span style='color:" +
            (num % 2 === 0 ? blue : green) +
            "'>" + num + "</span></li>");
    }
    console.log("</ul>");
}
