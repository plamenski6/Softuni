function solve(input) {

    let badGrades = Number(input.shift());
    let title = input.shift();

    let counter = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastTitel = '';

    while (title !== "Enough") {
        let grade = Number(input.shift());
        gradeSum += grade;
        gradeCount++;
        lastTitel = title;

        if (grade <= 4) {
            counter++;
        }
        if (counter === badGrades) {
            break;
        }
        title = input.shift();
    }

    if (title === "Enough") {
        console.log(`Average score: ${(gradeSum / gradeCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`)
        console.log(`Last problem: ${lastTitel}`)
    } else {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }

}

solve([3,
    'Money',
    6,
    'Story',
    4,
    'Spring Time',
    5,
    'Bus',
    6,
    'Enough'
]);
