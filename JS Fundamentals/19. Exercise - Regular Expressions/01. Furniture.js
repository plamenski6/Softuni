function solve(input) {

    let total = 0;
    console.log('Bought furniture:');

    for (const line of input) {
        const regex = />>(?<name>.+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
        const match = regex.exec(line);

        if (match) {
            const { name, price, quantity } = match.groups;
            console.log(name);
            total += Number(price) * Number(quantity);
        }
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);

}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
