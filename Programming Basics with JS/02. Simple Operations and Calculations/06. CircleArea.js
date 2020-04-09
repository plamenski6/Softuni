function solve(input) {

    let r = Number(input.shift());
    let s = Math.PI * r * r;
    let p = 2 * Math.PI * r;

    console.log(s.toFixed(2));
    console.log(p.toFixed(2));

}

solve([4.5]);
