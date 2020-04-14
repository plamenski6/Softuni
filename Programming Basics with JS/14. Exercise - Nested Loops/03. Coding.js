function solve(input) {

    let number = input[0];

    for (let i = number.length - 1; i >= 0; i--) {
        let num = Number(number[i]);
        let symbol = String.fromCharCode(num + 33);

        if (num == 0) {
            console.log("ZERO");
        } else {
            line = symbol.repeat(num);
            console.log(line);
        }
    }

}

solve(["2049"]);
