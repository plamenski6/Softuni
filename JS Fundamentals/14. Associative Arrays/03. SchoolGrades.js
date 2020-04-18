function solve(input) {

    let dnevnik = new Map();

    for (let element of input) {
        let tokens = element.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (dnevnik.has(name)) {
            let oldGrades = dnevnik.get(name);
            dnevnik.set(name, oldGrades.concat(grades));
        } else {
            dnevnik.set(name, grades);
        }
    }

    let sortGrade = Array.from(dnevnik.entries());
    sortGrade.sort((a, b) => average(a[1]) - average(b[1]));

    for (let element of sortGrade) {
        console.log(`${element[0]}: ${element[1].join(', ')}`);
    }

    function average(arr) {
        let sum = 0;
        for (let i of arr) {
            sum += i;
        }
        return sum / arr.length;
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
