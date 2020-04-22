function solve(input) {

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= arr[arr.length - 1] || arr[arr.length - 1] === undefined) {
            arr.push(input[i]);
        }
    }

    arr.forEach(item => console.log(item));

}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
