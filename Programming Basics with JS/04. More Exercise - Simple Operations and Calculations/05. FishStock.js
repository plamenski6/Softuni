function solve(input) {

    let prSkumriq = Number(input.shift());
    let prCaca = Number(input.shift());
    let kgPal = Number(input.shift());
    let kgSaf = Number(input.shift());
    let kgMidi = Number(input.shift());

    let prPal = prSkumriq + prSkumriq * 0.60;
    let allPal = kgPal * prPal;
    let prSaf = prCaca + prCaca * 0.80;
    let allSaf = kgSaf * prSaf;
    let allMidi = kgMidi * 7.5;
    let smetka = allPal + allSaf + allMidi;

    console.log(smetka.toFixed(2));

}

solve([6.90, 4.20, 1.5, 2.5, 1]);
