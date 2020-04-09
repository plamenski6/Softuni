function solve(input) {

    let l = Number(input.shift());
    let w = Number(input.shift());
    let a = Number(input.shift());

    let gz = (l * 100) * (w * 100);
    let gg = (a * 100 * a * 100);
    let gp = gz / 10;
    let sb = gz - gg - gp;
    let bt = sb / (40 + 7000);

    let down = Math.floor(bt);
    console.log(down);
}

solve([50, 25, 2]);
