function solve(input) {

    let hours = Number(input.shift());
    let minutes = Number(input.shift());

    let sum = hours * 60 + minutes + 15;
    hours = parseInt(sum / 60);
    minutes = sum % 60;

    if (hours >= 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

solve([23, 59]);
