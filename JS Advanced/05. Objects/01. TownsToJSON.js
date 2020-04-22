function solve(input) {

    let head = input.shift();
    let arr = [];
    let regex = /\s*\|\s*/g;

    for (let i of input) {
        let cmd = i.split(regex);
        let obj = { Town: cmd[1], Latitude: Number(cmd[2]).toFixed(2), Longitude: Number(cmd[3]).toFixed(2) };
        arr.push(obj);
    }

    console.log(JSON.stringify(arr));

}

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
