function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" / ");
        let obj = {};
        obj.hero = tokens[0];
        obj.level = tokens[1];
        obj.items = tokens[2]
            .split(', ')
            .sort()
            .join(', ');

        result.push(obj);
    }

    result = result.sort((a, b) => a.level - b.level);
    result = result.map(a => {
        console.log(`Hero: ${a.hero}`);
        console.log(`level => ${a.level}`);
        console.log(`items => ${a.items}`);
    })

}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);
