function solve(input) {

    let l = Number(input.shift());
    let w = Number(input.shift());
    let h = Number(input.shift());
    let p = Number(input.shift());

    let vakv = l * w * h;
    let vl = vakv * 0.001;
    let perc = p * 0.01;
    let realliter = vl * (1 - perc);

    console.log(realliter.toFixed(3));
}

solve([105, 77, 89, 18.5]);
