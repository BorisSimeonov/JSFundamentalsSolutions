function distanceOverTime(input) {
    //in m/s
    let vOne = (Number(input[0]) * 1000) / 3600;
    let vTwo = (Number(input[1]) * 1000) / 3600;
    let timeInSec = Number(input[2]);

    let distanceBetween = Math.abs((vOne * timeInSec) - (vTwo * timeInSec));
    console.log(distanceBetween);
}
