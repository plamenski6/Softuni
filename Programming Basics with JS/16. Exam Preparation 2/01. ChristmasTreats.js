function solve(input) {

    let cenaBaklava = Number(input.shift());
    let cenaMuffin = Number(input.shift());
    let kgShtolen = Number(input.shift());
    let kgBonboni = Number(input.shift());
    let kgBiskviti = Number(input.shift());

    let cenaShtolen = cenaBaklava + (cenaBaklava * 0.6);
    let sumShtolen = kgShtolen * cenaShtolen;
    let cenaBonboni = cenaMuffin + (cenaMuffin * 0.8);
    let sumBonboni = kgBonboni * cenaBonboni;
    let sumBiskviti = kgBiskviti * 7.5;
    let total = sumShtolen + sumBonboni + sumBiskviti;

    console.log(total.toFixed(2));

}

solve([
    6.90,
    4.20,
    1.5,
    2.5,
    1,
]);
