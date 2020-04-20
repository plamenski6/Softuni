function solve(input) {

    const list = input.shift().split(", ");
    const racers = {};

    for (let line of input) {
        const nameRegex = /[A-Za-z]/g;
        const digitRegex = /[\d]/g;

        const matchedName = line.match(nameRegex);
        const matchedDigits = line.match(digitRegex);

        if (matchedName && matchedDigits) {
            const name = matchedName.join('');

            if (list.includes(name)) {
                const distance = matchedDigits.map(Number).reduce((a, b) => a + b, 0);

                if (!racers[name]) {
                    racers[name] = 0;
                }

                racers[name] += distance;
            }
        }
    }

    Object.keys(racers)
        .sort((a, b) => racers[b] - racers[a])
        .slice(0, 3)
        .forEach((racer, index) => {
            switch (index) {
                case 0:
                    console.log(`1st place: ${racer}`);
                    break;
                case 1:
                    console.log(`2nd place: ${racer}`);
                    break;
                case 2:
                    console.log(`3rd place: ${racer}`);
                    break;
            }
        });

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
