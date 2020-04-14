function solve(input) {

    let budget = Number(input.shift());
    let name = input.shift();

    while (name != "Stop") {
        let result = 0;
        for (let i = 0; i < name.length; i++) {
            result += name.charCodeAt(i);
        }

        if (result <= budget) {
            budget -= result;
            console.log('Item successfully purchased!');
        } else {
            console.log('Not enough money!');
            break;
        }

        name = input.shift();
    }

    if (name == "Stop") {
        console.log(`Money left: ${budget}`);
    }

}

solve([5000,
    'Christmas lights',
    'wreath',
    'Stop'
]);
