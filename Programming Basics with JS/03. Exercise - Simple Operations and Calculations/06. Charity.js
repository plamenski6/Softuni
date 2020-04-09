function solve(input) {

    let days = Number(input.shift());
    let bakers = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let puncakes = Number(input.shift());

    let cakesSum = cakes * 45;
    let waffleSum = waffles * 5.8;
    let puncakeSum = puncakes * 3.2;
    let totalSum = (cakesSum + waffleSum + puncakeSum) * bakers;
    let allSum = totalSum * days;
    let afterpay = allSum - (allSum / 8);

    console.log(afterpay.toFixed(2));
}

solve([131, 5, 9, 33, 46]);
