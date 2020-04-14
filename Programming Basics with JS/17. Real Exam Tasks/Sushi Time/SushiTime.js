function solve(input) {

    let sushi = input.shift();
    let rest = input.shift();
    let brPorcii = Number(input.shift());
    let porachka = input.shift();
    let result = 0;

    switch (rest) {
        case "Sushi Zone":
            switch (sushi) {
                case "sashimi": result = brPorcii * 4.99; break;
                case "maki": result = brPorcii * 5.29; break;
                case "uramaki": result = brPorcii * 5.99; break;
                case "temaki": result = brPorcii * 4.29; break;
            }
            break;
        case "Sushi Time":
            switch (sushi) {
                case "sashimi": result = brPorcii * 5.49; break;
                case "maki": result = brPorcii * 4.69; break;
                case "uramaki": result = brPorcii * 4.49; break;
                case "temaki": result = brPorcii * 5.19; break;
            }
            break;
        case "Sushi Bar":
            switch (sushi) {
                case "sashimi": result = brPorcii * 5.25; break;
                case "maki": result = brPorcii * 5.55; break;
                case "uramaki": result = brPorcii * 6.25; break;
                case "temaki": result = brPorcii * 4.75; break;
            }
            break;
        case "Asian Pub":
            switch (sushi) {
                case "sashimi": result = brPorcii * 4.50; break;
                case "maki": result = brPorcii * 4.80; break;
                case "uramaki": result = brPorcii * 5.50; break;
                case "temaki": result = brPorcii * 5.50; break;
            }
            break;
        default:
            console.log(`${rest} is invalid restaurant!`);
    }

    if (porachka == "Y") {
        result += result * 0.2;
    }
    if (result > 0) {
        console.log(`Total price: ${Math.ceil(result)} lv.`);
    }

}

solve(["maki",
    "Sushi Zone",
    4,
    "Y"
]);
