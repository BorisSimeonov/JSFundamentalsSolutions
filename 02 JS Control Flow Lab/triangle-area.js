function triangleeArea(input) {
    var triangle = {a: Number(input[0]), b: Number(input[1]), c: Number(input[2])};
    var semiP = (triangle.a + triangle.b + triangle.c) / 2;
    var area = Math.sqrt(semiP * (semiP - triangle.a) * (semiP - triangle.b) * (semiP - triangle.c));

    console.log(area);
}
