function solve(num1, oper, num2) {
    let result = 0;

    switch (oper) {
        case "+": result = num1 + num2;
            break;
        case "-": result = num1 - num2;
            break;
        case "*": result = num1 * num2;
            break;
        case "/": result = num1 / num2;
            break;
        default:
            break;
    }

    console.log(result.toFixed(2));

}

solve(5, '+', 10);
