function areaAndPerimeter(input) {
    let [w,l] = [Number(input[0]), Number(input[1])];
    let area = w * l;
    let perimeter = (w * 2) + (l * 2);

    console.log(Math.round(area * 100) / 100);
    console.log(Math.round(perimeter * 100) / 100);
}
