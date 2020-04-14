function solve(input) {

    let name = input.shift();
    let budget = Number(input.shift());
    let butilki = Number(input.shift());
    let chips = Number(input.shift());

    let allBira = butilki * 1.2;
    let for1Chips = allBira * 0.45;
    let allChips = Math.ceil(chips * for1Chips);
    let allSum = allBira + allChips;

    if (budget >= allSum) {
        console.log(`${name} bought a snack and has ${(budget - allSum).toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${(allSum - budget).toFixed(2)} more leva!`);
    }

}

solve(["George", 10, 2, 3]);
