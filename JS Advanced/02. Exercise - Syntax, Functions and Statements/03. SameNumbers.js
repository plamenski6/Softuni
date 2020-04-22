function solve(num) {

    let num1 = num.toString().split("");
    let allTrue = true;
    let sum = 0;

    for (let i = 0; i < num1.length; i++) {
        sum += Number(num1[i]);
        if (allTrue) {
            allTrue = num1[i] === num1[0];
        }
    }

    console.log(allTrue);
    console.log(sum);

}

solve(1234);
