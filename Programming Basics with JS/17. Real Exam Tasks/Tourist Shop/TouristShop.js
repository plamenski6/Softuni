function solve(input) {

    let budget = Number(input.shift());
    let command = input.shift();
    let result = 0;
    let counter = 1;

    while (command != "Stop") {

        let cenaPr = Number(input.shift());

        if (counter % 3 == 0) {
            cenaPr = cenaPr / 2;
        }

        result += cenaPr;

        if (budget < result) {
            console.log("You don't have enough money!");
            console.log(`You need ${(result - budget).toFixed(2)} leva!`)
            break;
        }

        command = input.shift();
        counter++;
    }

    if (command == "Stop") {
        console.log(`You bought ${counter - 1} products for ${result.toFixed(2)} leva.`)
    }

}

solve([54,
    'Thermal underwear',
    24,
    'Sunscreen',
    45
]);
