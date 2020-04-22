function solve(arr) {

    let arr1 = [];

    arr.forEach((item, index) => {
        if (index % 2 === 0) {
            arr1.push(item);
        }
    });

    console.log(arr1.join(" "));

}

solve(['20', '30', '40']);
