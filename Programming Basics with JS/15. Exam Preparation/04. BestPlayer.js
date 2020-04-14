function solve(input) {

    let name = input.shift();
    let max = Number.MIN_SAFE_INTEGER;
    let bestPlayer = "";
    let counter = 1;

    while (name != "END") {
        let goals = Number(input.shift());

        if (goals > max) {
            max = goals;
            bestPlayer = name;
        }
        if (goals >= 10) {
            break;
        }

        name = input.shift();
        counter++
    }

    console.log(`${bestPlayer} is the best player!`);

    if (max >= 3) {
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${max} goals.`);
    }

}

solve(["Neymar",
    4,
    "Ronaldo",
    1,
    "Messi",
    3,
    "END"
]);
