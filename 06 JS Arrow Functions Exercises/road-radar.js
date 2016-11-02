function lab([speed, place]) {
    let difference = 0;

    switch (place) {
        case 'motorway':    //130
            difference = (+speed - 130);
            break;
        case 'interstate':  //90
            difference = (+speed - 90);
            break;
        case 'city': //50
            difference = (+speed - 50);
            break;
        case 'residential': //20
            difference = (+speed - 20);
            break;
    }

    if (difference > 40) {
        console.log("reckless driving");
    } else if (difference > 0 && difference <= 40) {
        console.log((difference > 20) ? "excessive speeding" : "speeding");
    }
}
