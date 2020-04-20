function solve(arr, rot) {

    for (let i = 1; i <= rot; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(" "));

}

solve([51, 47, 32, 61, 21], 2);
