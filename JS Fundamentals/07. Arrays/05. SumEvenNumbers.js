function solve(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result += Number(arr[i]);
        }
    }

    console.log(result);

}

solve(['1', '2', '3', '4', '5', '6']);
