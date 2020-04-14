function solve(input) {

    let moneyNeeded = Number(input.shift());
    let command = input.shift();
    let result = 0;

    while (command !== "Party!") {
        name = command;
        let brKokteili = Number(input.shift());
        let price = 0;
        price = brKokteili * name.length;

        if (price % 2 == 1) {
            price = price - (price * 0.25);
        }
        result += price
        if (moneyNeeded <= price) {
            console.log("Target acquired.")
            break;
        }

        command = input.shift();
    }

    if (command === "Party!") {
        console.log(`We need ${(moneyNeeded - result).toFixed(2)} leva more.`)
    }

    console.log(`Club income - ${result.toFixed(2)} leva.`);

}

solve([500, "Bellini", 6, "Bamboo", 7, "Party!"]);
solve([100, "Sidecar", 7, "Mojito", 5, "White Russian", 10]);
