function solve(input) {

    let n = Number(input[0]);
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let a = 1; a <= 9; a++) {
                for (let b = 1; b <= 9; b++) {
                    for (let c = 1; c <= 9; c++) {
                        for (let d = 1; d <= 9; d++) {
                            let score = i * j * a * b * c * d;
                            if (score === n) {
                                result += `${i}${j}${a}${b}${c}${d} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(result);

}

solve([2]);
