function solve(n) {

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            console.log("* ".repeat(n));
        }
    } else {
        console.log("* ".repeat(5));
    }

}

solve(2);
