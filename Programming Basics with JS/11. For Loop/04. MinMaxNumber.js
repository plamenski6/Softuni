function solve(input) {

    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        if (number < min) {
            min = number
        }
        if (number > max) {
            max = number
        }

    }

    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);

}

solve([3, 1, 2, 3]);
