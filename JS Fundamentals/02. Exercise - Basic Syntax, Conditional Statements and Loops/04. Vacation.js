function solve(people, type, day) {

    let result = 0;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    result = people * 8.45;
                    break;
                case "Saturday":
                    result = people * 9.8;
                    break;
                case "Sunday":
                    result = people * 10.46;
                    break;
                default:
                    break;
            }
            break;
        case "Business":
            if (type == "Business" && people >= 100) {
                people -= 10
            }
            switch (day) {
                case "Friday":
                    result = people * 10.9;
                    break;
                case "Saturday":
                    result = people * 15.6;
                    break;
                case "Sunday":
                    result = people * 16;
                    break;
                default:
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    result = people * 15;
                    break;
                case "Saturday":
                    result = people * 20;
                    break;
                case "Sunday":
                    result = people * 22.5;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    if (type == "Students" && people >= 30) {
        result -= result * 0.15
    }
    if (type == "Regular" && people >= 10 && people <= 20) {
        result -= result * 0.05
    }

    console.log(`Total price: ${result.toFixed(2)}`);

}

solve(40,
    "Regular",
    "Saturday"
);
