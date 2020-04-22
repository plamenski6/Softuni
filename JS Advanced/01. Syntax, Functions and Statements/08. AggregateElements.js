function solve(arr) {

    let sum = 0;
    let sumInverse = 0;
    let concat = "";
    for (let i of arr) {
        sum += i;
        sumInverse += 1 / i;
        concat += String(i);
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);

}

solve([1, 2, 3]);
