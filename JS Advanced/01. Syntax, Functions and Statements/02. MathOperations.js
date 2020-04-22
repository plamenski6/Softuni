function solve(n1, n2, op) {

    if (op === "+") {
        console.log(n1 + n2);
    } else if (op === "-") {
        console.log(n1 - n2);
    } else if (op === "*") {
        console.log(n1 * n2);
    } else if (op === "/") {
        console.log(n1 / n2);
    } else if (op === "%") {
        console.log(n1 % n2);
    } else if (op === "**") {
        console.log(n1 ** n2);
    }

}

solve(5, 6, '+');
