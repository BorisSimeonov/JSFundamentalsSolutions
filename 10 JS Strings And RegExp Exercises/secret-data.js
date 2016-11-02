function solution(textLines) {
    for (let line of textLines) {
        //name
        line = line.replace(/((\*[A-Z][A-Za-z]*)|(![A-Za-z\d]+)|(\+[\d-]{10})|(_[A-Za-z\d]+))(?=\s|\t|$)/g,
            hideField);
        console.log(line);
    }

    function hideField($0, $1) {
        "use strict";
        //console.log($0);
        return "|".repeat($1.length);
    };
}
