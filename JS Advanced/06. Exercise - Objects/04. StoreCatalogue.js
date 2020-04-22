function solve(input) {

    let parsedData = input.reduce((acc, product) => {
        let [name, price] = product.split(" : ");

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], product]
        } else {
            acc[name[0]] = [product]
        }

        return acc
    }, {});

    Object.keys(parsedData).sort().map(x => {
        console.log(x);

        parsedData[x].sort().map(pr => {
            console.log(`  ${pr.split(" : ").join(": ")}`);
        });
    });

}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
