function solve(input) {

    let n = Number(input.shift());

    let redCounter = 0;
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let maxName = "";

    for (let i = 1; i <= n; i++) {
        let colorEggs = input.shift();

        switch (colorEggs) {
            case `red`: redCounter++; break;
            case `orange`: orangeCounter++; break;
            case `blue`: blueCounter++; break;
            case `green`: greenCounter++; break;
        }

        if (redCounter > maxEggs) {
            maxEggs = redCounter
            maxName = colorEggs;
        }
        if (orangeCounter > maxEggs) {
            maxEggs = orangeCounter
            maxName = colorEggs;
        }
        if (blueCounter > maxEggs) {
            maxEggs = blueCounter
            maxName = colorEggs;
        }
        if (greenCounter > maxEggs) {
            maxEggs = greenCounter
            maxName = colorEggs;
        }

    }

    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greenCounter}`);
    console.log(`Max eggs: ${maxEggs} -> ${maxName}`);

}

solve([7, `orange`, `blue`, `green`, `green`, `blue`, `red`, `green`]);
