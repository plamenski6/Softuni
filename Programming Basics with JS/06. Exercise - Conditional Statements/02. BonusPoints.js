function solve(input) {

    let tochki = Number(input.shift());
    let bonus = 0.0;

    if (tochki <= 100) {
        bonus = 5;
    } else if (tochki > 1000) {
        bonus = 0.1 * tochki;
    } else {
        bonus = 0.2 * tochki;
    }

    if (tochki % 2 == 0) {
        bonus += 1;
    } else if (tochki % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(tochki + bonus);
}

solve([20]);
