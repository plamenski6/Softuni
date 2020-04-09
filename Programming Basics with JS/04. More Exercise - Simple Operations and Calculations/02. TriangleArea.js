function solve(input) {

    let a = Number(input.shift());
    let h = Number(input.shift());

    let s = a * h / 2

    console.log(s.toFixed(2));
}

solve([20, 30]);
