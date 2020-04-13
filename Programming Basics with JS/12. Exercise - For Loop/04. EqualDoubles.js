function solve(input) {

    let countOfPairs = Number(input.shift());

    let lastPair = 0;
    let maxDiff = 0;

    for (let i = 0; i < countOfPairs; i++) {
        let firstNum = Number(input.shift());
        let secondNum = Number(input.shift());
        let currentPair = firstNum + secondNum;

        if (i > 0) {
            let diff = Math.abs(currentPair - lastPair);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }

        lastPair = currentPair;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${lastPair}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}

solve([3,
    1,
    2,
    0,
    3,
    4,
    -1
]);
