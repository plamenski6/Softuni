function solve(input) {

    let n = Number(input.shift());
    let sum = 0;

    for (let a = 0; a < n; a++) {
        let currentNum = Number(input.shift());
        sum = sum + currentNum;
    }

    console.log(sum);

}

solve([2, 100, 100]);
