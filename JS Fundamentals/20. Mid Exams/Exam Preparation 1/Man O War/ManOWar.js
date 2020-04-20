function solve(arr) {

    let pirateShip = arr.shift()
        .split('>')
        .map(Number);
    let warShip = arr.shift()
        .split('>')
        .map(Number);

    let maxHealth = arr.shift();
    maxHealth = Number(maxHealth);
    let counter = 0;
    let isSunk = false;

    for (let i = 0; i < arr.length; i++) {
        let [command, num1, num2, num3] = arr[i].split(" ");
        num1 = Number(num1); num2 = Number(num2); num3 = Number(num3);

        if (command === "Retire") {
            break;
        }

        switch (command) {
            case "Fire":
                let index = num1;
                let damage = num2;
                if (index >= 0 && index <= warShip.length) {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        isSunk = true;
                        console.log("You won! The enemy ship has sunken.");
                        break;
                    }
                }
                break;
            case "Defend":
                let startIndex = num1;
                let endIndex = num2;
                let damage2 = num3;
                if (startIndex >= 0 && endIndex <= pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage2;
                        if (pirateShip[i] <= 0) {
                            isSunk = true;
                            console.log("You lost! The pirate ship has sunken.");
                            break;
                        }
                    }
                }
                break;
            case "Repair":
                let indexR = num1;
                let health = num2;
                if (indexR >= 0 && indexR <= pirateShip.length) {
                    if (pirateShip[indexR] + health < maxHealth) {
                        pirateShip[indexR] += health
                    } else {
                        pirateShip[indexR] = maxHealth;
                    }
                }
                break;
            case "Status":
                for (let i = 0; i < pirateShip.length; i++) {
                    let minHealth = maxHealth * 0.2;
                    if (pirateShip[i] < minHealth) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`);
                break;
            default:
                break;
        }

    }

    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);

    if (!isSunk) {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }

}

solve(['2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire']);
