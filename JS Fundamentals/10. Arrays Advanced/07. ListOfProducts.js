function solve(arr) {

    let newArr = arr.sort();
    for (let i = 0; i < newArr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`);
    }

}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
