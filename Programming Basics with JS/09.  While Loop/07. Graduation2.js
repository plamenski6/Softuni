function solve(input) {

    let name = input.shift();
    let totalGrade = 0;
    let counter = 1;

    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade >= 4) {
            totalGrade = totalGrade + grade;
            counter++;
        } else {
            console.log(`${name} has been excluded at ${counter} grade`);
            break;
        }
    }

    if (counter == 13) {
        console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`);
    }
}

solve(["Gosho",
    5,
    5.5,
    6,
    5.43,
    5.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5,
]);
