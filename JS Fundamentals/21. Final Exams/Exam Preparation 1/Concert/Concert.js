function solve(input) {

    let bandName = input.pop();
    let obj = {};
    let totalTime = 0;
    for (let i of input) {

        if (i === "start of concert") {
            break;
        }

        let cmd = i.split("; ");

        switch (cmd[0]) {
            case "Add":
                if (!obj.hasOwnProperty(cmd[1])) {
                    obj[cmd[1]] = {
                        add: cmd[2],
                        play: 0
                    };
                } else {
                    let members = cmd[2].split(", ");
                    for (let j of members) {
                        if (!obj[cmd[1]].add.includes(j)) {
                            obj[cmd[1]].add += `, ${j}`;
                        }
                    }
                }
                break;
            case "Play":
                if (!obj.hasOwnProperty(cmd[1])) {
                    obj[cmd[1]] = {
                        add: "",
                        play: Number(cmd[2])
                    };
                } else {
                    obj[cmd[1]].play += Number(cmd[2]);
                }
                totalTime += Number(cmd[2]);
                break;
        }
    }

    let arr = Object.entries(obj);
    arr.sort((a, b) => b[1].play - a[1].play || a[0].localeCompare(b[0]));

    console.log(`Total time: ${totalTime}`)
    arr.forEach(el => {
        console.log(`${el[0]} -> ${el[1].play}`);
    });

    for (let k of arr) {
        if (k[0] === bandName) {
            console.log(bandName)
            let members = k[1].add.split(", ");
            for (let person of members) {
                console.log(`=> ${person}`);
            }
        }
    }
    
}

solve([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]);
