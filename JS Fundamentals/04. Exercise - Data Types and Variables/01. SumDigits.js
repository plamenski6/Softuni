function solve(num) {
    num = String(num);
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);
    }

    console.log(sum);

}

solve(543);
