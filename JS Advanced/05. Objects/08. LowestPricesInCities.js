function solve(input) {

    let obj = {};
    
    input.forEach((item, index, arr) => {
        let [city, product, price] = item.split(" | ");
        price = Number(price);
        if (!obj.hasOwnProperty(product)) {
            obj[product] = price //+ ` (${city})`;
        } else {

        }
    });

    for (let j in obj) {
        console.log(`${j} -> ${obj[j]}`);
    }

}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);
