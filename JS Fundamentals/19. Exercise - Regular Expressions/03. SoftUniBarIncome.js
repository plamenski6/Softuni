function solve(input) {

    let total = 0;

    for (const line of input) {
        const regex = /%(?<customer>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>\w+)>(?:[^\|\$%\.]+)?\|(?<quantity>\d+)\|(?:[^\|\$%\.\d]+)?(?<price>\d+\.?\d+)\$/g
        const match = regex.exec(line);

        if (match) {
            const { customer, product, quantity, price } = match.groups;
            const purchaseValue = Number(price) * Number(quantity);
            console.log(`${customer}: ${product} - ${purchaseValue.toFixed(2)}`);
            total += purchaseValue;
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
