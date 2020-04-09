function solve(input) {

    let kucheta = Number(input.shift());
    let ostJivotni = Number(input.shift());

    let razhodi = (kucheta * 2.5) + (ostJivotni * 4);

    console.log(razhodi.toFixed(2) + " lv.");
}

solve([13, 9]);
