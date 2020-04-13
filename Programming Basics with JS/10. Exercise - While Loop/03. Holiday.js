function solve(input) {

    let moneyForTrip = Number(input.shift());
    let balance = Number(input.shift());
    let spendCount = 0;
    let days = 0;

    while (balance < moneyForTrip) {
        let command = input.shift();
        let money = Number(input.shift());
        days++;

        if (command === "save") {
            balance += money;
            spendCount = 0;
        } else if (command === "spend") {
            balance -= money;
            spendCount++;
            if (spendCount === 5) {
                break;
            }
            if (balance < 0) {
                balance = 0;
            }
        }

    }

    if (spendCount === 5) {
        console.log("You can't save the money.");
        console.log(days);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }

}

solve([2000,
    1000,
    "spend",
    1200,
    "save",
    2000,
]);
