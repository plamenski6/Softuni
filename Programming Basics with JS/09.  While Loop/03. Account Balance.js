function solve(input) {

    let n = Number(input.shift());
    let total = 0;
    let counter = 0;

    while (n > counter) {
        let money = Number(input.shift());
        if (money < 0) {
            console.log("Invalid operation!")
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        total = total + money;
        counter++;
    }
    
    console.log(`Total: ${total.toFixed(2)}`);

}

solve([5,
    120,
    45.55,
    -150
]);
