function solve(input) {

    let month = input.shift();
    let nights = Number(input.shift());
    let studio = 0;
    let apartment = 0;
    let sum = 0;
    let sumA = 0;

    switch (month) {
        case "May":
            studio = 50;
            apartment = 65;
            sum = studio * nights;
            sumA = apartment * nights;
            if (nights > 14) {
                sum = sum * 0.7;
                sumA = sumA * 0.9;
            } else if (nights > 7) {
                sum = sum * 0.95;
            }
            break;
        case "October":
            studio = 50;
            apartment = 65;
            sum = studio * nights;
            sumA = apartment * nights;
            if (nights > 14) {
                sum = sum * 0.7;
                sumA = sumA * 0.9;
            } else if (nights > 7) {
                sum = sum * 0.95;
            }
            break;
        case "June":
            studio = 75.2;
            apartment = 68.7;
            sum = studio * nights;
            sumA = apartment * nights;
            if (nights > 14) {
                sum = sum * 0.8;
                sumA = sumA * 0.9;
            }
            break;
        case "September":
            studio = 75.2;
            apartment = 68.7;
            sum = studio * nights;
            sumA = apartment * nights;
            if (nights > 14) {
                sum = sum * 0.8;
                sumA = sumA * 0.9;
            }
            break;
        case "July":
            studio = 76;
            apartment = 77;
            sum = studio * nights;
            sumA = apartment * nights;
            if (nights > 14) {
                sumA = sumA * 0.9;
            }
            break;
        case "August":
            studio = 76;
            apartment = 77;
            sum = studio * nights;
            sumA = apartment * nights;
            if (nights > 14) {
                sumA = sumA * 0.9;
            }
            break;
    }

    console.log(`Apartment: ${sumA.toFixed(2)} lv.`);
    console.log(`Studio: ${sum.toFixed(2)} lv.`);

}

solve(["August", 20]);
