function calcVat(input) {
    var priceSum = 0;
    var vatValue;
    var totalSum;

    for (var idx = 0; idx < input.length; ++idx) {
        priceSum += Number(input[idx]);
    }
    vatValue = priceSum * 0.2;
    totalSum = priceSum + vatValue;

    console.log("sum = " + priceSum);
    console.log("VAT = " + vatValue);
    console.log("total = " + Number(totalSum.toPrecision(12)));
}
