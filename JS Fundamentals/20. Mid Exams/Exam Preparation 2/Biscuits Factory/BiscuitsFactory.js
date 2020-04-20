function solve(arr) {

    let biscuitsPerDay = arr.shift();
    biscuitsPerDay = Number(biscuitsPerDay);
    let workers = arr.shift();
    workers = Number(workers);
    let otherFactBuiscuits = arr.shift();
    otherFactBuiscuits = Number(otherFactBuiscuits);

    let total = 0;
    let allDay = 0;
    let thirdDay = 0;

    for (let i = 1; i <= 30; i++) {

        if (i % 3 === 0) {
            thirdDay = biscuitsPerDay - (biscuitsPerDay * 0.25);
            allDay = thirdDay * workers;
            allDay = Math.floor(allDay);
        } else {
            allDay = biscuitsPerDay * workers;
        }
        total += allDay;
    }

    console.log(`You have produced ${total} biscuits for the past month.`);

    let difference = total - otherFactBuiscuits;
    let perc = (difference / otherFactBuiscuits) * 100;

    if (total >= otherFactBuiscuits) {
        console.log(`You produce ${perc.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(perc).toFixed(2)} percent less biscuits.`);
    }

}

solve(['78',
    '8',
    '16000']);
