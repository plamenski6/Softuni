function solve(arr1, arr2) {
    let counter = 0;
    arr1 = arr1.slice(0, arr2[0]);
    arr1.splice(0, arr2[1]);

    for (let el of arr1) {
        if (el === arr2[2]) {
            counter++;
        }
    }

    console.log(`Number ${arr2[2]} occurs ${counter} times.`);

}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
