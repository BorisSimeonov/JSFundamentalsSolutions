function compoundInterest(input) {
    let pSum = Number(input[0]);
    let intRate = Number(input[1]);     //in %
    let compPeriod = Number(input[2]);
    let compFrequency = (12 / compPeriod);  //in months
    let timespan = Number(input[3]);    //in years

    let F = 1 + ((intRate / 100) / compFrequency);
    F = Math.pow(F, (compFrequency * timespan));
    F *= pSum;

    console.log(F.toFixed(2));
}
