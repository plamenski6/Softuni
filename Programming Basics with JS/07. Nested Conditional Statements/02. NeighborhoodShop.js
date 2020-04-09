function solve(input) {

    let product = input.shift();
    let grad = input.shift();
    let broika = Number(input.shift());
    let result = 0;

    switch (grad) {
        case "Sofia": {
            if (product === "coffee") {
                result = broika * 0.5;
            } else if (product === "water") {
                result = broika * 0.8;
            } else if (product === "beer") {
                result = broika * 1.2;
            } else if (product === "sweets") {
                result = broika * 1.45;
            } else {
                result = broika * 1.6;
            }
        };
            break;
        case "Plovdiv": {
            switch (product) {
                case "coffee": result = broika * 0.4; break;
                case "water": result = broika * 0.7; break;
                case "beer": result = broika * 1.15; break;
                case "sweets": result = broika * 1.3; break;
                case "peanuts": result = broika * 1.5; break;
            }
        };
            break;
        case "Varna": {
            if (product === "coffee") {
                result = broika * 0.45;
            } else if (product === "water") {
                result = broika * 0.7;
            } else if (product === "beer") {
                result = broika * 1.1;
            } else if (product === "sweets") {
                result = broika * 1.35;
            } else {
                result = broika * 1.55;
            }
        };
            break;
    }

    console.log(result);

}

solve(["sweets", "Varna", 2]);
