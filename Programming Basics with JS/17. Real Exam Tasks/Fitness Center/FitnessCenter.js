function solve(input) {

    let brPos = Number(input.shift());
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let i = 1; i <= brPos; i++) {
        let deinost = input.shift();
        switch (deinost) {
            case "Back": back++;
                break;
            case "Chest": chest++;
                break;
            case "Legs": legs++;
                break;
            case "Abs": abs++;
                break;
            case "Protein shake": proteinShake++;
                break;
            case "Protein bar": proteinBar++;
                break;
        }
    }

    let percWorkOut = ((back + chest + legs + abs) / brPos) * 100;
    let percProtein = ((proteinBar + proteinShake) / brPos) * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${percWorkOut.toFixed(2)}% - work out`);
    console.log(`${percProtein.toFixed(2)}% - protein`);

}

solve(['10',
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs'
]);
