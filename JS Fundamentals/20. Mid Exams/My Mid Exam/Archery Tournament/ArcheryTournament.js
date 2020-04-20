function solve(input) {

    let targets = input.shift().split('|');
    targets = targets.map(Number)
    let iskren = 0;

    for (let i of input) {
        if (i === "Game over") {
            break;
        }

        let cmd = i.split('@');

        switch (cmd[0]) {
            case "Shoot Left":
                if (cmd[1] >= 0 && cmd[1] <= targets.length) {
                    let move = Number(cmd[1]) - Number(cmd[2]);
                    if (move < 0) {
                        while (move < 0) {
                            move = (targets.length) - Math.abs(move);
                        }
                        if (targets[move] <= 0) {
                            iskren += 0;
                            targets[move] = 0;
                        } else {
                            targets[move] -= 5;
                            iskren += 5;
                        }

                    } else {
                        if (targets[move] <= 0) {
                            iskren += 0;
                            targets[move] = 0;
                        } else {
                            targets[move] -= 5;
                            iskren += 5;
                        }
                    }
                }
                break;
            case "Shoot Right":
                if (cmd[1] >= 0 && cmd[1] <= targets.length) {
                    let move = Number(cmd[2]) + Number(cmd[1]);
                    if (move > targets.length) {
                        while (move > targets.length) {
                            move = 0 + targets.length;
                        }
                        if (targets[move - 1] <= 0) {
                            iskren += 0;
                            targets[move - 1] = 0;
                        } else {
                            targets[move - 1] -= 5;
                            iskren += 5;
                        }
                    } else {
                        if (targets[move] <= 0) {
                            iskren += 0;
                            targets[move] = 0;
                        } else {
                            targets[move] -= 5;
                            iskren += 5;
                        }
                    }
                }
                break;
            case "Reverse":
                targets = targets.reverse();
                break;
        }
    }

    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${iskren} points!`);

}

solve([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
]);
