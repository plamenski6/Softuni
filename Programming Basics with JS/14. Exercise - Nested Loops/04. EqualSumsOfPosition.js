function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let result = '';

    for (let number = num1; number <= num2; number++) {
        let ink = number.toString();

        for (let i = 0; i <= ink - 1; i++) {
            let sumChetno = 0;
            let sumNechetno = 0;

            if (i % 2 == 0) {
                sumChetno += i;
            } else {
                sumNechetno += i;
            }
        }
    }

    if (sumChetno == sumNechetno) {
        console.log(result)
    }

}

solve([100000,
    100050
])
