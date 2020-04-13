function solve(input) {

    let tabs = Number(input.shift());
    let zaplata = Number(input.shift());

    for (let i = 0; i < tabs; i++) {
        let nameSite = input.shift();

        switch (nameSite) {
            case "Facebook": zaplata -= 150;
                break;
            case "Instagram": zaplata -= 100;
                break;
            case "Reddit": zaplata -= 50;
                break;
        }

    }

    if (zaplata <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(zaplata)
    }

}
solve([3,
    500,
    'Github.com',
    'Stackoverflow.com',
    'softuni.bg'
]);
