function solve(input) {

    let budget = Number(input.shift());
    let sezon = input.shift();
    let brRibari = Number(input.shift());
    let result = 0;

    switch (sezon) {
        case "Spring": result = 3000;
            break;
        case "Summer": result = 4200;
            break;
        case "Autumn": result = 4200;
            break;
        case "Winter": result = 2600;
            break;
    }

    if (brRibari <= 6) {
        result = result * 0.9;
    } else if (brRibari <= 11) {
        result = result * 0.85;
    } else {
        result = result * 0.75;
    }

    if (brRibari % 2 === 0 && sezon !== "Autumn") {
        result = result * 0.95;
    }

    if (budget >= result) {
        console.log(`Yes! You have ${(budget - result).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(result - budget).toFixed(2)} leva.`);
    }

}

solve([2000,
    "Winter",
    13
]);
