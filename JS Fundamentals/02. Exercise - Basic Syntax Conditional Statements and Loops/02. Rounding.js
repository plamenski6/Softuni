function solve(a, b) {

    if (b > 15) {
        b = 15
    }

    console.log(parseFloat(a.toFixed(b)));

}

solve(3.1415926535897932384626433832795, 2);
