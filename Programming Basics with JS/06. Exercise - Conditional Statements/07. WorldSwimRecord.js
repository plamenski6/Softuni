function solve(input) {

    let record = Number(input.shift());
    let razstoqnie = Number(input.shift());
    let vreme = Number(input.shift());

    let sum = razstoqnie * vreme;
    let zab = Math.floor(razstoqnie / 15) * 12.5;
    let total = sum + zab;

    if (record <= total) {
        console.log(`No, he failed! He was ${((total - record).toFixed(2))} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(total.toFixed(2))} seconds.`)
    }
}

solve([55555.67,
    3017,
    5.03
]);
