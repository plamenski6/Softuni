function solve(input) {

    let h = Number(input.shift());
    let w = Number(input.shift());
    let procentNeBoqd = Number(input.shift());
    let command = input.shift()
    let obshto = h * w * 4;
    let steniZaBoq = obshto - ((obshto * procentNeBoqd) / 100);

    while (command != "Tired!") {
        let litriBoq = Number(command);

        if (steniZaBoq < litriBoq) {
            console.log(`All walls are painted and you have ${litriBoq - steniZaBoq} l paint left!`)
            break;
        }
        if (steniZaBoq == litriBoq) {
            console.log('All walls are painted! Great job, Pesho!');
            break;
        }

        steniZaBoq = steniZaBoq - litriBoq;
        command = input.shift()
    }

    if (command == "Tired!") {
        console.log(`${Math.ceil(steniZaBoq)} quadratic m left.`);
    }

}

solve([3,
    5,
    10,
    2,
    3,
    4,
    'Tired!'
]);
