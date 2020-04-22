function solve(input) {

    let obj = {};
    for (let i of input) {
        if (!obj.hasOwnProperty(i)) {
            obj[i] = 0;
        }
    }

    let arr = Object.keys(obj).sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })

    for (let j of arr) {
        console.log(j);
    }

}

solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']);
