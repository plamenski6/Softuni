function solve(input) {

    let obj = {};
    for (let i of input) {
        let [name, model, quantity] = i.split(" | ");
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {}
        }
        if (!obj[name].hasOwnProperty(model)) {
            obj[name][model] = Number(quantity);
        } else {
            obj[name][model] += Number(quantity);
        }
    }

    let arr = Object.entries(obj);
    for (let j of arr) {
        console.log(j[0])
        for (let k in j[1]) {
            console.log(`###${k} -> ${j[1][k]}`);
        }
    }

}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
