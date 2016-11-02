function solution(textLines) {
    let titles = textLines[0].split(/\s?\|\s?/).filter(x => x !== "");
    let cityData;
    let cityObject = [];
    let bufferObject;

    for (let line of textLines.slice(1)) {
        cityData = line.split(/\s?\|\s?/).filter(x => x !== "");
        bufferObject = {};
        bufferObject[titles[0]] = cityData[0];
        bufferObject[titles[1]] = Number(cityData[1]);
        bufferObject[titles[2]] = Number(cityData[2]);
        cityObject.push(bufferObject);
    }
    console.log(JSON.stringify(cityObject));
}
