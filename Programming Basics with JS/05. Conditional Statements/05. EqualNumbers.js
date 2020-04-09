function solve(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());

    if (a == b && b == c) {
        console.log("yes");
    } else {
        console.log("no");
    }

}

solve([1, 1, 1]);
solve([5, 5, 5]);
solve([2, 2, 3]);
solve([11, 8, 5]);
solve([13, 14, 99]);
