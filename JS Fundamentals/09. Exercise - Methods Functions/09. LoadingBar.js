function loadingBar(n) {
    let arr = [];
    let counter = 0;

    for (let i = 0; i <= n; i += 10) {
        if (i > 0) {
            arr.push("%")
            counter++;
        }
    }

    counter = 10 - counter;

    if (n < 100) {
        console.log(`${n}% [${arr.join("")}${".".repeat(counter)}]`)
        console.log('Still loading...')
    } else {
        console.log(`${n}% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    }

}

loadingBar(80);
