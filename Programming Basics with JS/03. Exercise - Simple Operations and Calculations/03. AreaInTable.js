function solve(input) {

    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    let s = a * b;
    let p = 2 * a + 2 * b;

    console.log(s.toFixed(2));
    console.log(p.toFixed(2));
}

solve([600.25, 500.75, 100.50, -200.5]);
