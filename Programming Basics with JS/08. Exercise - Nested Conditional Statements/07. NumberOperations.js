function solve(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let operator = input.shift();
    let result = 0;

    switch (operator) {
        case "+":
            result = a + b;
            if (result % 2 == 0) {
                console.log(`${a} + ${b} = ${result} - even`);
            } else {
                console.log(`${a} + ${b} = ${result} - odd`);
            }
            break;
        case "-":
            result = a - b;
            if (result % 2 == 0) {
                console.log(`${a} - ${b} = ${result} - even`);
            } else {
                console.log(`${a} - ${b} = ${result} - odd`);
            }
            break;
        case "*":
            result = a * b;
            if (result % 2 == 0) {
                console.log(`${a} * ${b} = ${result} - even`);
            } else {
                console.log(`${a} * ${b} = ${result} - odd`);
            }
            break;
        case "/":
            result = a / b;
            if (b == 0) {
                console.log(`Cannot divide ${a} by zero`)
            } else {
                console.log(`${a} / ${b} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            result = a % b;
            if (b == 0) {
                console.log(`Cannot divide ${a} by zero`)
            } else {
                console.log(`${a} % ${b} = ${result}`);
            }
            break;
    }

}

solve([10, 12, "+"]);
