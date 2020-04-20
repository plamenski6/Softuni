function solve(input) {

    let obj = {};

    for (let i of input) {
        let command = i.split(":");

        if (command[0] === "Results") {
            break;
        }

        switch (command[0]) {
            case "Add":
                if (!obj.hasOwnProperty(command[1])) {
                    obj[command[1]] = {
                        health: Number(command[2]),
                        energy: Number(command[3])
                    };
                } else {
                    obj[command[1]].health += Number(command[2]);
                    obj[command[1]].energy += Number(command[3]);
                }
                break;
            case "Attack":
                if (obj.hasOwnProperty(command[1]) && obj.hasOwnProperty(command[2])) {
                    obj[command[2]].health -= Number(command[3]);
                    obj[command[1]].energy--;
                    if (obj[command[2]].health <= 0) {
                        delete obj[command[2]];
                        console.log(`${command[2]} was disqualified!`);
                    }
                    if (obj[command[1]].energy <= 0) {
                        delete obj[command[1]];
                        console.log(`${command[1]} was disqualified!`)
                    }
                }
                break;
            case "Delete":
                if (command[1] === "All") {
                    obj = {};
                } else {
                    delete obj[command[1]];
                }
                break;
        }
    }

    let arr = Object.entries(obj);
    arr.sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0]));

    console.log(`People count: ${arr.length}`);
    arr.forEach(el => {
        console.log(`${el[0]} - ${el[1].health} - ${el[1].energy}`);
    })

}

solve([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);
