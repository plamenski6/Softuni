function solve(input) {

    let pari = Number(input.shift());
    let brFantasy = Number(input.shift());
    let brHorror = Number(input.shift());
    let brRomantic = Number(input.shift());

    let sum = brFantasy * 14.9 + brHorror * 9.8 + brRomantic * 4.3;
    let dds = sum * 0.2;
    let sumBezDds = sum - dds;

    if (sumBezDds >= pari) {
        let result = sumBezDds - pari;
        let result1 = Math.floor(result * 0.1);
        console.log(`${(((result + pari) - result1).toFixed(2))} leva donated.`);
        console.log(`Sellers will receive ${Math.ceil(result1)} leva.`);
    } else {
        console.log(`${(pari - sumBezDds).toFixed(2)} money needed.`);
    }

}

solve([200,
    15,
    10,
    5,
]);
