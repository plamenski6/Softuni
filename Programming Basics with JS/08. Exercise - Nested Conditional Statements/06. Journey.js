function solve(input) {

    let budget = Number(input.shift());
    let sezon = input.shift();
    let destinaciq = '';
    let pochivka = '';
    let result = 0;

    if (budget <= 100) {
        switch (sezon) {
            case "summer":
                pochivka = "Camp";
                destinaciq = "Bulgaria";
                result = budget * 0.3;
                break;
            case "winter":
                pochivka = "Hotel";
                destinaciq = "Bulgaria";
                result = budget * 0.7;
                break;
        }
    } else if (budget <= 1000) {
        switch (sezon) {
            case "summer":
                pochivka = "Camp";
                destinaciq = "Balkans";
                result = budget * 0.4;
                break;
            case "winter":
                pochivka = "Hotel";
                destinaciq = "Balkans";
                result = budget * 0.8;
                break;
        }
    } else {
        switch (sezon) {
            case "summer":
                pochivka = "Hotel";
                destinaciq = "Europe";
                result = budget * 0.9;
                break;
            case "winter":
                pochivka = "Hotel";
                destinaciq = "Europe";
                result = budget * 0.9;
                break;
        }
    }

    console.log(`Somewhere in ${destinaciq}`);
    console.log(`${pochivka} - ${result.toFixed(2)}`);

}

solve([50, "summer"]);
