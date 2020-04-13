function solve(input) {

    let n = Number(input.shift());

    let p1c = 0;
    let p2c = 0;
    let p3c = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());

        if (num % 2 == 0) {
            p1c++;
        }
        if (num % 3 == 0) {
            p2c++;
        }
        if (num % 4 == 0) {
            p3c++;
        }
    }

    let p1 = p1c / n * 100;
    let p2 = p2c / n * 100;
    let p3 = p3c / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);

}

solve([3,
    3,
    6,
    9,
]);
