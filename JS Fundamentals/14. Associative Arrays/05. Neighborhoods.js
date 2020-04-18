function solve(input) {

    let neighborhood = new Map;
    let streets = input.shift().split(", ");

    streets.forEach(key => {
        neighborhood.set(key, []);
    });

    for (let element of input) {
        let tokens = element.split(" - ");
        if (neighborhood.has(tokens[0])) {
            let el = neighborhood.get(tokens[0]);
            el.push(tokens[1]);
            neighborhood.set(tokens[0], el);
        }
    }

    let sorted = Array.from(neighborhood.entries())
        .sort((a, b) => b[1].length - a[1].length);

    for (let i of sorted) {
        console.log(`${i[0]}: ${i[1].length}`);
        for (let members of i[1]) {
            console.log(`--${members}`);
        }
    }

}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);
