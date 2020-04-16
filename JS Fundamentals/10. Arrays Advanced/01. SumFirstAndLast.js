function solve(arr) {

    let el2 = Number(arr.pop());
    let el1 = Number(arr.shift());
    let res = el2 + el1;

    return res;

}

console.log(solve(['5', '10']));
