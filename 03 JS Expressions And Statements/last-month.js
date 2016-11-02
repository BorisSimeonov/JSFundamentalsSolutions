function lastMonth(input) {
    let inputDate = new Date();
    inputDate.setFullYear(Number(input[2]), Number(input[1]), 0);
    let newDate = new Date();
    newDate.setFullYear(inputDate.getFullYear(), inputDate.getMonth(), 0);
    console.log(newDate.getDate());
}
