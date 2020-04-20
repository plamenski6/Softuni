function solve(input) {

    const obj = {
        attacked: [],
        destroyed: []
    };

    for (let line of input.slice(1)) {
        const regex = /[star]/gmi;
        const key = line.match(regex) ? line.match(regex).length : 0;

        const message = line.split('').map((c) => String.fromCharCode(c.charCodeAt(0) - key)).join('');
        const messagePattern = /@(?<planet>[A-Za-z]+)(?:[^@\-!:>]+)?:(?<population>[\d]+)(?:[^@\-!:>]+)?!(?<type>A|D)!(?:[^@\-!:>]+)?->(?<soldiers>[\d]+)/gm;

        const matches = messagePattern.exec(message);
        if (matches) {
            const { planet, population, type, soldiers } = matches.groups;

            if (type === "A") {
                obj.attacked.push(planet);
            } else if (type === "D") {
                obj.destroyed.push(planet);
            }
        }
    }

    const attackedLength = obj.attacked.length;
    const destroyedLength = obj.destroyed.length;

    console.log(`Attacked planets: ${attackedLength}`);
    if (attackedLength > 0) {
        obj.attacked.sort((a, b) => a.localeCompare(b)).forEach((planet) => console.log(`-> ${planet}`));
    }

    console.log(`Destroyed planets: ${destroyedLength}`);
    if (destroyedLength > 0) {
        obj.destroyed.sort((a, b) => a.localeCompare(b)).forEach((planet) => console.log(`-> ${planet}`));
    }

}

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
