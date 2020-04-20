function solve(input) {

    const capacity = Number(input.shift());
    let data = {};

    for (let el of input) {
        let cmd = el.split("=");

        if (cmd[0] === "Statistics") {
            break;
        }

        switch (cmd[0]) {
            case "Add":
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        sent: Number(cmd[2]),
                        received: Number(cmd[3])
                    }
                }
                break;
            case "Message":
                if (data.hasOwnProperty(cmd[1]) && data.hasOwnProperty(cmd[2])) {
                    data[cmd[1]].sent++;
                    data[cmd[2]].received++;

                    if (data[cmd[1]].sent + data[cmd[1]].received >= capacity) {
                        delete data[cmd[1]];
                        console.log(`${cmd[1]} reached the capacity!`);
                    }
                    if (data[cmd[2]].sent + data[cmd[2]].received >= capacity) {
                        delete data[cmd[2]];
                        console.log(`${cmd[2]} reached the capacity!`);
                    }
                }
                break;
            case "Empty":
                if (cmd[1] === "All") {
                    data = {};
                } else {
                    delete data[cmd[1]];
                }
                break;

        }
    }

    let arr = Object.entries(data)
    let comparator = (a, b) => b[1].received - a[1].received || a[0].localeCompare(b[0]);
    arr = arr.sort(comparator);

    console.log(`Users count: ${arr.length}`);
    arr.forEach(el => {
        console.log(`${el[0]} - ${el[1].sent + el[1].received}`);
    })

}

solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]);
