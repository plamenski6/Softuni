function solve(product, br) {
    let result = 0;

    switch (product) {
        case 'coffee':
            result = br * 1.5;
            break;
        case 'water':
            result = br * 1;
            break;
        case 'coke':
            result = br * 1.4;
            break;
        case 'snacks':
            result = br * 2
            break;
        default:
            break;
    }

    return result.toFixed(2);

}

console.log(solve('water', 5));
