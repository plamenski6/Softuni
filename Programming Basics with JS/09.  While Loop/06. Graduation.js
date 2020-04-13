function solve(input) {

    let name = input.shift();
    let totalGrade = 0;
    let counter = 1;

    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade >= 4) {
            totalGrade = totalGrade + grade;
            counter++;
        }
    }

    console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`);

}

solve(["Ani",
    5,
    5.32,
    6,
    5.43,
    5,
    6,
    5.5,
    4.55,
    5,
    6,
    5.56,
    6
]);
