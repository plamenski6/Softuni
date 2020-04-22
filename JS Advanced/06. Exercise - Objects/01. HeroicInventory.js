function solve(input) {

    let obj = {};
    let arr = [];

    for (let i of input) {
        let [name, level, items] = i.split(" / ");

        obj = {
            name: name,
            level: Number(level),
            items: items ? items.split(", ") : []
        }
        arr.push(obj);
    }

    console.log(JSON.stringify(arr));

}

solve(['Isacc / 25 /',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
