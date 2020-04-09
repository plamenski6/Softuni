function solve(input) {

    let days = Number(input.shift());
    let room = input.shift();
    let grade = input.shift();
    let price = 0;

    switch (room) {
        case "room for one person": {
            price = (days - 1) * 18;
        }; break;
        case "apartment": {
            if (days < 10) {
                price = ((days - 1) * 25) * 0.7;
            } else if (days >= 10 && days <= 15) {
                price = ((days - 1) * 25) * 0.65;
            } else {
                price = ((days - 1) * 25) * 0.5;
            }
        }; break;
        case "president apartment": {
            if (days < 10) {
                price = ((days - 1) * 35) * 0.9;
            } else if (days >= 10 && days <= 15) {
                price = ((days - 1) * 35) * 0.85;
            } else {
                price = ((days - 1) * 35) * 0.8;
            }
        }; break;
    }

    if (grade == "positive") {
        price = price + (price * 0.25);
    } else {
        price = price - (price * 0.1);
    }

    console.log(price.toFixed(2));

}

solve([30,
    "president apartment",
    "negative"
    ]);
