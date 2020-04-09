function solve(input) {

    let tables = Number(input.shift());
    let lenght = Number(input.shift());
    let width = Number(input.shift());

    let cloth = tables * (lenght + 2 * 0.30) * (width + 2 * 0.30);
    let carets = tables * (lenght / 2) * (lenght / 2);

    let usd = cloth * 7 + carets * 9;
    let bgn = usd * 1.85;

    console.log(usd.toFixed(2) + " USD");
    console.log(bgn.toFixed(2) + " BGN");

}

solve([10, 1.20, 0.65]);
