function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    console.log(result.join("\n"));

}

solve([-2, -1, 8, 0]);
