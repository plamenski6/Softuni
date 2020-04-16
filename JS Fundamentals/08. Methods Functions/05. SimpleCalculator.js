function solve(n1, n2, oper) {
    let result = 0;

    switch (oper) {
        case "multiply":
            result = n1 * n2;
            break;
        case "divide":
            result = n1 / n2;
            break;
        case "add":
            result = n1 + n2;
            break;
        case "subtract":
            result = n1 - n2;
            break;
        default:
            break;
    }

    return result;

}

console.log(solve(1, 2, "multiply"));
