function solve(arr) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(item => console.log(item));

}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
