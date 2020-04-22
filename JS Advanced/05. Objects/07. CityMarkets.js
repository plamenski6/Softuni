function solve(input) {

    let objCity = {};

    for (let i of input) {
        let [city, product, total] = i.split(" -> ");
        let [amount, price] = total.split(" : ");

        if (!objCity.hasOwnProperty(city)) {
            objCity[city] = [`${product} : ${amount * price}`];
        } else {
            objCity[city].push(`${product} : ${amount * price}`);
        }
    }

    for (let i in objCity) {
        console.log(`Town - ${i}`);
        for (let j of objCity[i]) {
            console.log(`$$$${j}`)
        }
    }

}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);
