function pointLocatorInRect(input) {
    let point = {
        x: Number(input[0]),
        y: Number(input[1]),
    };
    let rect = {
        xMin: Number(input[2]),
        xMax: Number(input[3]),
        yMin: Number(input[4]),
        yMax: Number(input[5])
    };

    if (
        (point.x <= rect.xMax && point.x >= rect.xMin) &&
        (point.y <= rect.yMax && point.y >= rect.yMin)
    ) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}
