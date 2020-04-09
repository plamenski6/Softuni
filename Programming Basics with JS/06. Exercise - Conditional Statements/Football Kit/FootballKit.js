function solve(input) {

    let teniskaCena = Number(input.shift());
    let sum = Number(input.shift());

    let shortiCena = teniskaCena * 0.75;
    let chorapiCena = shortiCena * 0.2;
    let butonkiCena = (teniskaCena + shortiCena) * 2;
    let all = teniskaCena + shortiCena + chorapiCena + butonkiCena;
    all = all - (all * 0.15);

    if (all >= sum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${all.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(sum - all).toFixed(2)} lv. more.`)
    }

}

solve([59.99, 500]);
