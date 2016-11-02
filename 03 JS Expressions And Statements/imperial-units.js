function imperialUnits(input) {
    let units = Number(input[0]);
    let feet = Math.floor(units / 12);
    let inches = units % 12;

    console.log(`${feet}'-${inches}"`);
}
