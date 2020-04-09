function solve(input) {

    let kvMet = Number(input.shift());
    let price = kvMet * 7.61;
    let dis = 0.18 * price;
    let finalPrice = price - dis;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${dis.toFixed(2)} lv.`);

}

solve([540]);
