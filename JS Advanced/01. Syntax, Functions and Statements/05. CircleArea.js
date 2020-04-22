function solve(n) {

    let s = 0;

    if (typeof (n) === "number") {
        s = Math.PI * (n * n);
        console.log(s.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (n)}.`);
    }

}

solve(5);
