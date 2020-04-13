function solve(input) {

    let n = Number(input.shift());
    let output = 1;
    
    while (output <= n) {
        console.log(output);
        output = output * 2 + 1;
    }
    
}

solve([8]);
