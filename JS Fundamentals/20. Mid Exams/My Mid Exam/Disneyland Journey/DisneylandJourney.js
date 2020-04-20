function solve(input) {

    let costs = input.shift();
    costs = Number(costs);
    let months = input.shift();
    months = Number(months);
    let total = 0;

    for (let i = 1; i <= months; i++) {
        let oneMonth = costs * 0.25;
        if (i > 1 && i % 2 === 1) {
            let others = total * 0.16;
            oneMonth -= others;
        }
        if (i % 4 === 0) {
            let bonus = total * 0.25;
            total += bonus;
        }
        total += oneMonth;
    }

    if (total >= costs) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(total - costs).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(costs - total).toFixed(2)}lv. more.`);
    }

}

solve(['3265', '3']);
