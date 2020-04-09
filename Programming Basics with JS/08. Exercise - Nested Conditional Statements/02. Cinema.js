function solve(input) {

    let tipProjekci = input.shift();
    let rows = Number(input.shift());
    let colmns = Number(input.shift());
    let result = 0;

    switch (tipProjekci) {
        case "Premiere": result = rows * colmns * 12;
            break;
        case "Normal": result = rows * colmns * 7.5;
            break;
        case "Discount": result = rows * colmns * 5;
            break;
    }

    console.log(`${result.toFixed(2)} leva`);

}

solve(["Premiere",
    10,
    12
]);
