function solve(n, m) {

    let copyA = n;
    let copyB = m;

    while (copyB !== 0) {
        let tempMod = copyA % copyB;
        copyA = copyB;
        copyB = tempMod;
    }

    console.log(copyA);

}

solve(15, 5);
