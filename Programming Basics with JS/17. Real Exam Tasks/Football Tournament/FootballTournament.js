function solve(input) {

    let team = input.shift();
    let brSreshti = Number(input.shift());
    let price = 0;
    let winRate = 0;
    let w = 0;
    let d = 0;
    let l = 0;

    for (let i = 1; i <= brSreshti; i++) {
        let result = input.shift()
        let score = 0;

        switch (result) {
            case "W":
                w++;
                score = 3;
                break;
            case "D":
                d++
                score = 1;
                break;
            case "L":
                l++;
                break;
        }

        price += score;
    }

    winRate = (w / brSreshti) * 100;

    if (brSreshti <= 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${price} points during this season.`);
        console.log('Total stats:');
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }

}

solve(['Liverpool', '10', 'W', 'D', 'D', 'W', 'L', 'W', 'D', 'D', 'W', 'W']);
