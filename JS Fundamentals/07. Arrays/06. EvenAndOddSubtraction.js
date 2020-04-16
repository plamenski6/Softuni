function solve(arr) {
    let sum = 0;
    let sum2 = 0;
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            sum2 += arr[i];
        }
    }

    result = sum - sum2;
    console.log(result);

}

solve([3, 5, 7, 9]);
