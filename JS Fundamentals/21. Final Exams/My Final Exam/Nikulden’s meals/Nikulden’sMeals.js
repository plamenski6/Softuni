function solve(input) {

    let obj = {};
    let unliked = 0;

    for (let line of input) {
        let cmd = line.split('-');

        if (cmd[0] === "Stop") {
            break;
        }

        switch (cmd[0]) {
            case "Like":
                if (!obj.hasOwnProperty(cmd[1])) {
                    obj[cmd[1]] = {
                        meal: [cmd[2]]
                    }
                } else {
                    if (!obj[cmd[1]].meal.includes(cmd[2])) {
                        obj[cmd[1]].meal.push(`${cmd[2]}`);
                    }
                }
                break;
            case "Unlike":
                if (obj.hasOwnProperty(cmd[1])) {
                    if (!obj[cmd[1]].meal == 0) {
                        if (obj[cmd[1]].meal.includes(cmd[2])) {
                            let index = obj[cmd[1]].meal.indexOf(cmd[1]);
                            obj[cmd[1]].meal.splice(index, 1);
                            unliked++;
                            console.log(`${cmd[1]} doesn't like the ${cmd[2]}.`);
                        } else {
                            console.log(`${cmd[1]} doesn't have the ${cmd[2]} in his/her collection.`)
                        }
                    } else {
                        console.log(`${cmd[1]} doesn't have the ${cmd[2]} in his/her collection.`)
                    }
                } else {
                    console.log(`${cmd[1]} is not at the party.`)
                }
                break;
        }
    }

    let arr = Object.keys(obj);
    arr.sort((a, b) => obj[b].meal.length - obj[a].meal.length || a.localeCompare(b));
    arr.forEach((el) => {
        let output = [];
        for (let i = 0; i < obj[el].meal.length; i++) {
            output.push(`${obj[el].meal[i]}`);
        }
        console.log(`${el}: ${output.join(", ")}`);
    });

    console.log(`Unliked meals: ${unliked}`);

}

solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]);
