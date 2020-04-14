function solve(input) {

    let n = Number(input[0]);
    let counter = 0;

    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j <= 25; j++) {
            for (let a = 0; a <= 25; a++) {
                for (let b = 0; b <= 25; b++) {
                    for (let c = 0; c <= 25; c++) {
                        let result = 0;
                        result += i + j + a + b + c;
                        if (result === n) {
                            counter++;
                        }
                    }
                }
            }
        }
    }

    console.log(counter);

}

solve([25]);
