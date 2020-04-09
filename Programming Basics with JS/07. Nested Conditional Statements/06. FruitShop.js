function solve(input) {

    let fruit = input.shift();
    let day = input.shift();
    let kol = Number(input.shift());
    let result = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" ||
        day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            result = kol * 2.5
        } else if (fruit == "apple") {
            result = kol * 1.2
        } else if (fruit == "orange") {
            result = kol * 0.85
        } else if (fruit == "grapefruit") {
            result = kol * 1.45
        } else if (fruit == "kiwi") {
            result = kol * 2.7
        } else if (fruit == "pineapple") {
            result = kol * 5.5
        } else if (fruit == "grapes") {
            result = kol * 3.85
        } else {
            console.log("error");
        }
    } else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            result = kol * 2.7
        } else if (fruit == "apple") {
            result = kol * 1.25
        } else if (fruit == "orange") {
            result = kol * 0.90
        } else if (fruit == "grapefruit") {
            result = kol * 1.6
        } else if (fruit == "kiwi") {
            result = kol * 3
        } else if (fruit == "pineapple") {
            result = kol * 5.6
        } else if (fruit == "grapes") {
            result = kol * 4.2
        } else {
            console.log("error");
        }

    } else {
        console.log("error");
    }

    if (result !== 0) {
        console.log(result.toFixed(2));
    }

}

solve(["orange", "Sunday", 3]);
