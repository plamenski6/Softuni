function solve(arr) {

    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let targetPlunder = Number(arr[2]);
    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += dailyPlunder;
        if (i % 3 === 0) {
            total += 0.5 * dailyPlunder;
        }
        if (i % 5 === 0) {
            total -= 0.3 * total;
        }
    }

    if (total >= targetPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let perc = (total / targetPlunder) * 100;
        console.log(`Collected only ${perc.toFixed(2)}% of the plunder.`);
    }

}

solve([5,
    40,
    100]);
