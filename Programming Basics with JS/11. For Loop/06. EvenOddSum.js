function solve(input) {

    let n = Number(input.shift());
    let odd = 0;
    let even = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (i % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }

    if (even == odd) {
        console.log("Yes")
        console.log(`Sum = ${even}`)
    } else {
        console.log("No")
        console.log(`Diff = ${Math.abs(even - odd)}`)
    }

}

solve([4,
    10,
    50,
    60,
    20
]);
