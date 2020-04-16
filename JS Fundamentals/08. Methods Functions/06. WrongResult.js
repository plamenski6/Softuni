function solve(n1, n2, n3) {

    let result = n1 * n2 * n3;
    if (result < 0) {
        return "Negative"
    } else {
        return "Positive"
    }

}

console.log(solve(-1, -1, -3));
