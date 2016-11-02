function cone(input) {
    var x = Number(input[0]);
    var y = Number(input[1]);
    if (x < y) {
        var buffer = x;
        x = y;
        y = buffer;
    }

    var cone = {h: x, r: y};
    var baseFace = Math.PI * cone.r * cone.r;
    var volume = baseFace * cone.h / 3;
    var l = (cone.h * cone.h) + (cone.r * cone.r);
    l = Math.sqrt(l);
    var S = Math.PI * cone.r * cone.r;
    S += Math.PI * cone.r * l;
    console.log(Number(volume.toFixed(4)));
    console.log(Number(S.toFixed(4)));
}
