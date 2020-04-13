function solve(input) {

    let age = Number(input.shift());
    let pricePeralnq = Number(input.shift());
    let priceIgracha = Number(input.shift());

    let countIgrachka = 0;
    let money = 10;
    let sumMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            countIgrachka++;
        } else {
            sumMoney += money
            sumMoney -= 1;
            money += 10;
        }
    }

    sumMoney += countIgrachka * priceIgracha;
    if (sumMoney >= pricePeralnq) {
        console.log(`Yes! ${(sumMoney - pricePeralnq).toFixed(2)}`);
    } else {
        console.log(`No! ${(Math.abs(sumMoney - pricePeralnq).toFixed(2))}`);
    }

}

solve([10, 170, 6]);
