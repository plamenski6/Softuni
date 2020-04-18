function solve(input) {

    let storage = new Map();

    for (let element of input) {
        let tokens = element.split(" ");

        if (storage.has(tokens[0])) {
            let oldQuantity = storage.get(tokens[0]);
            storage.set(tokens[0], oldQuantity + Number(tokens[1]));
        } else {
            storage.set(tokens[0], Number(tokens[1]));
        }
    }

    let entries = Array.from(storage.entries());

    for (let i of entries) {
        console.log(`${i[0]} -> ${i[1]}`);
    }

}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
