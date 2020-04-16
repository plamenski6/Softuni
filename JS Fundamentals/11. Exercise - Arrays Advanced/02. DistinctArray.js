function solve(arr) {

    let uniqueEl = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueEl.includes(arr[i])) {
            uniqueEl.push(arr[i]);
        }
    }

    console.log(uniqueEl.join(" "));

}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
