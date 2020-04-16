function sorting(arr) {

    let ascending = arr.slice().sort((a, b) => a - b);
    let descending = arr.slice().sort((a, b) => b - a);
    let output = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            output.push(descending.shift());
        } else {
            output.push(ascending.shift());
        }
    }

    console.log(output.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
