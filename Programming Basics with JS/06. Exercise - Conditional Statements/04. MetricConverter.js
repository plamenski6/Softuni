function solve(input) {

    let n = Number(input.shift());
    let vme = input.shift();
    let ime = input.shift();

    switch (vme) {
        case 'cm':
            n = n / 100;
            break;
        case 'mm':
            n = n / 1000;
            break;
    }

    switch (ime) {
        case 'cm':
            n = n * 100;
            break;
        case 'mm':
            n = n * 1000;
            break;
    }
    console.log(n.toFixed(3));
}

solve([45, "cm", "mm"]);
