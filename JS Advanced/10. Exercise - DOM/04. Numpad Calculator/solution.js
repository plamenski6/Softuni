function solve() {

    let exprOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let clear = document.getElementsByClassName("clear")[0];


    let operators = ['+', '-', '*', '/'];
    let operations = {
        "+": (num1, num2) => Number(num1) + Number(num2),
        "-": (num1, num2) => Number(num1) - Number(num2),
        "*": (num1, num2) => Number(num1) * Number(num2),
        "/": (num1, num2) => Number(num1) / Number(num2),
    }

    let keys = document.getElementsByClassName("keys")[0];
    keys.addEventListener("click", ({ target: { value } }) => {
        if (!value) {
            return;
        }

        if (operators.includes(value)) {
            exprOutput.innerHTML += ` ${value} `;
            return;
        }

        if (value === "=") {
            let params = exprOutput.innerHTML.split(" ");

            if (params[2]) {
                resultOutput.innerHTML = operations[params[1]](params[0], params[2]);
            } else {
                resultOutput.innerHTML = "NaN";
            }

            return;
        }

        exprOutput.innerHTML += value;
    });

    clear.addEventListener("click", (e) => {
        if (e.target.value === "Clear") {
            exprOutput.innerHTML = "";
            resultOutput.innerHTML = "";
        }
    });

}
