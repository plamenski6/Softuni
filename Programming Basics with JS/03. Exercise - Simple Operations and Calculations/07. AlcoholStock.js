function solve(input) {

    let whiskeypr = Number(input.shift());
    let beerliter = Number(input.shift());
    let wineliter = Number(input.shift());
    let rakijaliter = Number(input.shift());
    let whiskeyliter = Number(input.shift());

    let rakijaPr = whiskeypr / 2;
    let winepr = rakijaPr - (0.4 * rakijaPr);
    let beerpr = rakijaPr - (0.8 * rakijaPr);

    let rakijaSum = rakijaliter * rakijaPr;
    let wineSum = wineliter * winepr;
    let beerSum = beerliter * beerpr;
    let whiskeySum = whiskeyliter * whiskeypr;

    let total = rakijaSum + wineSum + beerSum + whiskeySum;

    console.log(total.toFixed(2));
}

solve([50, 10, 3.5, 6.5, 1]);
