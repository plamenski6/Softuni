function solve(input) {

    let patnici = Number(input.shift());
    let spirki = Number(input.shift());

    for (let i = 1; i <= spirki; i++) {
        let slizashti = Number(input.shift());
        let kachvashti = Number(input.shift());

        patnici -= slizashti;
        patnici += kachvashti;

        if (i % 2 == 1) {
            patnici += 2;
        } else {
            patnici -= 2;
        }
    }

    console.log(`The final number of passengers is : ${patnici}`);

}
solve([25,
    5,
    14,
    15,
    9,
    11,
    10,
    13,
    6,
    7,
    10,
    8,
]);
