function solve(num, arr) {

    arr.length = num;
    console.log(arr.reverse().join(' '));

}

solve(3, [10, 20, 30, 40, 50]);
