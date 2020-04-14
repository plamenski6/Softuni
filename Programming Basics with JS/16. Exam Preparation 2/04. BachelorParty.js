function solve(input) {

    let sumForSinger = Number(input.shift());
    let people = input.shift();
    let kuvert = 0;
    let sum = 0;
    let sumKuvert = 0;

    while (people != "The restaurant is full") {
        if (people < 5) {
            kuvert = people * 100;
        }
        if (people >= 5) {
            kuvert = people * 70;
        }
        sumKuvert += kuvert;
        sum += Number(people);
        people = input.shift();
    }

    if (sumForSinger <= sumKuvert) {
        console.log(`You have ${sum} guests and ${sumKuvert - sumForSinger} leva left.`);
    } else {
        console.log(`You have ${sum} guests and ${sumKuvert} leva income, but no singer.`)
    }

}

solve([1800,
    4,
    4,
    4,
    4,
    6,
    6,
    "The restaurant is full"
]);
