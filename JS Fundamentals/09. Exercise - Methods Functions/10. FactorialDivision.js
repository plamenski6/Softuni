function factDivision(n, m) {
    let factN = 1;
    let factN1 = 1;
    let result = 0;

    for (let i = 1; i <= n; i++) {
        factN *= i;
    }

    for (let j = 1; j <= m; j++) {
        factN1 *= j;
    }

    result = factN / factN1;
    console.log(result.toFixed(2));

}

factDivision(5, 2);
