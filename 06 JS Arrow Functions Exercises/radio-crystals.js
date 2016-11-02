function lab(input) {
    let chunks = input.map(Number);
    let goalSize = chunks[0];
    chunks.splice(0, 1);
    let log = [];
    let lastAction = {action: "", count: 0};
    let logUpdaterOnProcessSwitch = function () {
        if (lastAction.count == 0) {
            return;
        } else {
            log.push(`${lastAction.action} x${lastAction.count}`)
            lastAction.count = 0;
        }
    };
    let washAndTransport = function (chunk, toWash = true) {
        if (toWash) {
            log.push("Transporting and washing");
        }
        return Math.floor(chunk);
    };


    let counter = 0;
    let mustBeWashed = false;
    for (let idx = 0; idx < chunks.length; ++idx) {
        log = [];
        log.push(`Processing chunk ${chunks[idx]} microns`);
        while (chunks[idx] * 0.25 >= goalSize - 1) {
            counter++;
            chunks[idx] *= 0.25;
            mustBeWashed = true;
        }

        if (counter > 0) {
            log.push(`Cut x${counter}`);
            if (mustBeWashed == true) {
                log.push("Transporting and washing");
            }
            mustBeWashed = false;
            counter = 0;
        }

        while (chunks[idx] * 0.8 >= goalSize - 1) {
            chunks[idx] = Math.floor(chunks[idx]);
            counter++;
            chunks[idx] *= 0.8;
            mustBeWashed = true;
        }

        if (counter > 0) {
            log.push(`Lap x${counter}`);
            if (mustBeWashed == true) {
                log.push("Transporting and washing");
            }
            mustBeWashed = false;
            counter = 0;
        }

        while (chunks[idx] - 20 >= goalSize - 1) {
            chunks[idx] = Math.floor(chunks[idx]);
            counter++;
            chunks[idx] -= 20;
            mustBeWashed = true;
        }

        if (counter > 0) {
            log.push(`Grind x${counter}`);
            if (mustBeWashed == true) {
                log.push("Transporting and washing");
            }
            mustBeWashed = false;
            mustBeWashed = false;
            counter = 0;
        }

        while (chunks[idx] - 2 >= goalSize - 1) {
            chunks[idx] = Math.floor(chunks[idx]);
            counter++;
            chunks[idx] -= 2;
            mustBeWashed = true;
        }

        if (counter > 0) {
            log.push(`Etch x${counter}`);
            if (mustBeWashed == true) {
                log.push("Transporting and washing");
            }
            mustBeWashed = false;
            counter = 0;
        }

        if (chunks[idx] == goalSize - 1 ||
            chunks[idx] == goalSize + 1) {
            chunks[idx] = Math.floor(chunks[idx]);
            chunks[idx] = goalSize;
            log.push(`X-ray x1`);
        }

        if (chunks[idx] == goalSize) {
            log.push(`Finished crystal ${chunks[idx]} microns`);
        }
        console.log(log.join('\n'));
    }
}