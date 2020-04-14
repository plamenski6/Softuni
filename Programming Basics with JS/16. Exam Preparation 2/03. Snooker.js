function solve(input) {

    let etap = input[0];
    let bilet = input[1];
    let brBileti = Number(input[2]);
    let snimka = input[3];
    let result = 0;

    switch (etap) {
        case "Quarter final":
            switch (bilet) {
                case "Standard": result = brBileti * 55.5;
                    break;
                case "Premium": result = brBileti * 105.2;
                    break;
                case "VIP": result = brBileti * 118.9;
                    break;
            }
            break;
        case "Semi final":
            switch (bilet) {
                case "Standard": result = brBileti * 75.88;
                    break;
                case "Premium": result = brBileti * 125.22;
                    break;
                case "VIP": result = brBileti * 300.40;
                    break;
            }
            break;
        case "Final":
            switch (bilet) {
                case "Standard": result = brBileti * 110.10;
                    break;
                case "Premium": result = brBileti * 160.66;
                    break;
                case "VIP": result = brBileti * 400;
                    break;
            }
            break;
    }

    if (result > 4000) {
        result = result - (result * 0.25);
    } else if (result > 2500) {
        result = result - (result * 0.1);
        if (snimka == "Y") {
            result = result + (brBileti * 40);
        }
    } else {
        if (snimka == "Y") {
            result = result + (brBileti * 40);
        }
    }

    console.log(result.toFixed(2));

}

solve(["Quarter final",
    "Standard",
    11,
    "N"
]);
