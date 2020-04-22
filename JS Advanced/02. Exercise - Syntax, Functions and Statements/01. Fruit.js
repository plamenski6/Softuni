function solve(f, kg, m) {

    let money = m * (kg / 1000);
    console.log(`I need $${money.toFixed(2)} to buy ${(kg / 1000).toFixed(2)} kilograms ${f}.`);

}

solve('orange', 2500, 1.80);
