function solve(input) {

    let prZel = Number(input.shift());
    let prPlod = Number(input.shift());
    let kgZel = Number(input.shift());
    let kgPlod = Number(input.shift());

    let allZel = prZel * kgZel;
    let allPlod = prPlod * kgPlod;
    let all = allZel + allPlod;
    let allevro = all / 1.94;

    console.log(allevro.toFixed(2));
}

solve(1.5, 2.5, 10, 10);
