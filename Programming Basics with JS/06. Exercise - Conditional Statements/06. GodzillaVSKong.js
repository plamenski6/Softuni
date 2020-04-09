function solve(input) {

    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let cenaObleklo = Number(input.shift());

    let dekor = 0.1 * budget;
    let oblekloSum = statists * cenaObleklo;


    if (statists > 150) {
        oblekloSum = oblekloSum - (oblekloSum * 0.1);
    }

    let result = dekor + oblekloSum;
    let ost = Math.abs(budget - result);

    if (result <= budget) {
        console.log('Action!')
        console.log(`Wingard starts filming with ${ost.toFixed(2)} leva left.`)
    } else {
        console.log('Not enough money!')
        console.log(`Wingard needs ${ost.toFixed(2)} leva more.`)
    }
}

solve([15437.62,
    186,
    57.99
]);
