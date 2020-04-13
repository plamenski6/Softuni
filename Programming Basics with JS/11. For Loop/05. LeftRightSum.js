function solve(input) {

    let n = Number(input.shift());
    let leftSide = 0;
    let rightSide = 0;

    for (let i = 0; i < 2 * n; i++) {
        let num = Number(input.shift());
        if (i < n) {
            leftSide += num;
        } else {
            rightSide += num;
        }
    }

    if (leftSide == rightSide) {
        console.log(`Yes, sum = ${leftSide}`)
    } else {
        console.log(`No, diff = ${Math.abs(leftSide - rightSide)}`)
    }

}

solve([2, 10, 90, 40, 60]);
