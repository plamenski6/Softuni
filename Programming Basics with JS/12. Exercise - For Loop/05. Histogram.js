function solve(input) {

    let n = Number(input.shift());

    let p1c = 0;
    let p2c = 0;
    let p3c = 0;
    let p4c = 0;
    let p5c = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());

        if (num < 200) {
            p1c++;
        } else if (num < 400) {
            p2c++;
        } else if (num < 600) {
            p3c++;
        } else if (num < 800) {
            p4c++;
        } else {
            p5c++;
        }
    }

    let p1 = p1c / n * 100;
    let p2 = p2c / n * 100;
    let p3 = p3c / n * 100;
    let p4 = p4c / n * 100;
    let p5 = p5c / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

solve([3, 2, 1, 999]);
