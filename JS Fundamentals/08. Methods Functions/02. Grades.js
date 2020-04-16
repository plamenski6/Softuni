function solve(n) {

    if (n >= 2 && n <= 2.99) {
        return 'Fail';
    } else if (n >= 3 && n <= 3.49) {
        return 'Poor';
    } else if (n >= 3.5 && n <= 4.49) {
        return 'Good';
    } else if (n >= 4.5 && n <= 5.49) {
        return 'Very good'
    } else if (n >= 5.5 && n <= 6) {
        return 'Excellent'
    }

}

console.log(solve(5));
