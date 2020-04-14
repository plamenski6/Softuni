function solve(input) {

    let budget = Number(input.shift());
    let n = Number(input.shift());
    let result = 0;

    for (let i = 0; i < n; i++) {
        let object = input.shift();

        switch (object) {
            case "hoodie": result += 30; break;
            case "keychain": result += 4; break;
            case "T-shirt": result += 20; break;
            case "flag": result += 15; break;
            case "sticker": result += 1; break;
        }
    }

    if (budget >= result) {
        console.log(`You bought ${n} items and left with ${budget - result} lv.`);
    } else {
        console.log(`Not enough money, you need ${result - budget} more lv.`);
    }

}

solve([25,
    3,
    "flag",
    "keychain",
    "sticker"
]);
