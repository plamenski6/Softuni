function solve(arr) {

    let newArr = [];

    arr.forEach((item, index) => {
        if (index % 2 === 1) {
            newArr.push(item * 2);
        }
    });

    console.log(newArr.reverse().join(" "));

}

solve([10, 15, 20, 25]);
