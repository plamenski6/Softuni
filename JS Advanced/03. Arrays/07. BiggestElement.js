function solve(arr) {

    let largest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a, b) => a - b).forEach(item => {
            if (largest < item) {
                largest = item;
            }
        });
    }

    console.log(largest);

}

solve([[20, 50, 10],
[8, 33, 145]]);
