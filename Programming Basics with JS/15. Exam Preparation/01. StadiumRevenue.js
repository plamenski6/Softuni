function solve(input) {

    let broiSektori = Number(input.shift());
    let kapacitet = Number(input.shift());
    let cenaBilet = Number(input.shift());

    let totalIncome = kapacitet * cenaBilet;
    let forOneSektor = totalIncome / broiSektori;
    let mCharity = (totalIncome - (forOneSektor * 0.75)) / 8;

    console.log(`Total income - ${totalIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${mCharity.toFixed(2)} BGN`);

}

solve([4, 5000, 5]);
