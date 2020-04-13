function solve(input) {

    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());

    let area = w * h * l;
    let command = input.shift();

    while (command !== "Done") {
        let box = Number(command);
        area = area - box;
        if (area <= 0) {
            break;
        }

        command = input.shift();
    }

    if (area > 0) {
        console.log(`${area} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`)
    }

}

solve([10,
    1,
    2,
    4,
    6,
    "Done"
]);
