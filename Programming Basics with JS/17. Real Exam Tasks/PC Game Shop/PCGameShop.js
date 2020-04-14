function solve(input) {

    let prIgri = Number(input.shift());
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    let counter = 0;

    for (let i = 1; i <= prIgri; i++) {
        let igra = input.shift();

        switch (igra) {
            case "Hearthstone": hearthstone++; break;
            case "Fornite": fornite++; break;
            case "Overwatch": overwatch++; break;
            default: others++; break;
        }

        counter++;
    }

    console.log(`Hearthstone - ${((hearthstone / counter) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / counter) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / counter) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / counter) * 100).toFixed(2)}%`);

}

solve([4,
    'Hearthstone',
    'Fornite',
    'Overwatch',
    'Counter-Strike']);
