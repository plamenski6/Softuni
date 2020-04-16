function solve(arr) {

    let newArr = arr.sort((a, b) => a - b)
        .slice(0, 2);
    console.log(newArr.join(" "));

}

solve([30, 15, 50, 5]);
