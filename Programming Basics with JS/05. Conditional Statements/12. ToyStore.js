function solve(input) {

    let cenaEkz = Number(input.shift());
    let brpuz = Number(input.shift());
    let brkukli = Number(input.shift());
    let brmech = Number(input.shift());
    let brmin = Number(input.shift());
    let brkam = Number(input.shift());

    let sum = brpuz * 2.6 + brkukli * 3 + brmech * 4.1 + brmin * 8.2 + brkam * 2;
    let allbr = brpuz + brkukli + brmech + brmin + brkam;
    if (allbr >= 50) {
        sum = sum - (sum * 0.25);
    }

    sum = sum - (sum * 0.10);
    let ostpari = sum - cenaEkz;

    if (sum >= cenaEkz) {
        console.log(`Yes! ${Math.abs(ostpari).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(ostpari).toFixed(2)} lv needed.`)
    }

}

solve([40.8, 20, 25, 30, 50, 10]);
