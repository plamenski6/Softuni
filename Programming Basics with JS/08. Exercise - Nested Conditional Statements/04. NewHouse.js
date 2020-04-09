function solve(input) {

    let vidCvetq = input.shift();
    let brCvetq = Number(input.shift());
    let budget = Number(input.shift());
    let result = 0;

    switch (vidCvetq) {
        case "Roses": result = brCvetq * 5;
            break;
        case "Dahlias": result = brCvetq * 3.8;
            break;
        case "Tulips": result = brCvetq * 2.8;
            break;
        case "Narcissus": result = brCvetq * 3;
            break;
        case "Gladiolus": result = brCvetq * 2.5;
            break;
    }

    if (vidCvetq === "Roses" && brCvetq > 80) {
        result = result - (result * 0.1);
    } else if (vidCvetq === "Dahlias" && brCvetq > 90) {
        result = result - (result * 0.15);
    } else if (vidCvetq === "Tulips" && brCvetq > 80) {
        result = result - (result * 0.15);
    } else if (vidCvetq === "Narcissus" && brCvetq < 120) {
        result = result + (result * 0.15);
    } else if (vidCvetq === "Gladiolus" && brCvetq < 80) {
        result = result + (result * 0.2);
    }

    if (budget >= result) {
        console.log(`Hey, you have a great garden with ${brCvetq} ${vidCvetq} and ${(budget - result).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(result - budget).toFixed(2)} leva more.`)
    }

}

solve(['Narcissus',
    119,
    360
]);
