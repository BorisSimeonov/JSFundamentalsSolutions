function lab([xVal,yVal,x2Val,y2Val]) {
    let distance = function (x, y, x2 = 0, y2 = 0) {
        let distance = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2));
        console.log(`{${x}, ${y}} to {${x2}, ${y2}} is ` +
            ((distance == Math.floor(distance)) ? "valid" : "invalid"));
    };

    distance(+xVal, +yVal);
    distance(+x2Val, +y2Val);
    distance(+xVal, +yVal, +x2Val, +y2Val);
}
