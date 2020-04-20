function solve(input) {

    let lines = input.shift();

    for (let i of input) {
        let regex = /^(!)(?<cmd>[A-Z]{1}[a-z]+)\1:\[(?<name>[A-Za-z]+)\]$/g;
        let match = regex.exec(i);

        if (match) {
            if (match[3].length >= 8) {
                let arr = [];
                for (let k of match[3]) {
                    k = k.charCodeAt();
                    arr.push(k);
                }
                console.log(`${match[2]}: ${arr.join(" ")}`);
            } else {
                console.log("The message is invalid");
            }
        } else {
            console.log("The message is invalid");
        }
    }

}

solve([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
]);
