function solve(arr) {

    let sum = 0;
    let sum1 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i
        } else {
            arr[i] -= i
        }
        sum1 += arr[i];
    }

    console.log(arr);
    console.log(sum);
    console.log(sum1);

}

solve([5, 15, 23, 56, 35]);
