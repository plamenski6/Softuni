function solve(a, b) {

    let output = "";
    let sum = 0;

    for (let i = a; i <= b; i++) {
        output += `${i} `;
        sum += i;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);

}

solve(5, 10)
