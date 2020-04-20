function solve(input) {

    let neededExp = input.shift();
    neededExp = Number(neededExp);
    let countBattles = input.shift();
    countBattles = Number(countBattles);
    input = input.map(Number);

    let total = 0;

    for (let i = 1; i <= countBattles; i++) {
        let currentExp = input[i - 1];

        if (i % 3 === 0) {
            currentExp += currentExp * 0.15;
        }
        if (i % 5 === 0) {
            currentExp -= currentExp * 0.1;
        }

        total += currentExp;
        if (total >= neededExp) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            break;
        }
    }

    if (neededExp > total) {
        console.log(`Player was not able to collect the needed experience, ${(neededExp - total).toFixed(2)} more needed.`);
    }

}

solve([
    '500', '5',
    '50', '100',
    '200', '100',
    '20'
]);
