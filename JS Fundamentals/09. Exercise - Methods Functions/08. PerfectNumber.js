function perfectNumbe(n) {
    let m = 0;

    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            m += i;
        }
    }

    if (n === m) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}

perfectNumbe(6);
