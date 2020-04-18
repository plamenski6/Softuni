function solve(input) {

    let obj = {};
    let resources = "";
    let quantity = 0;

    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            resources = input[i];
        } else {
            quantity = Number(input[i]);
        }

        if (obj.hasOwnProperty(resources)) {
            obj[resources] += quantity;
        } else {
            obj[resources] = quantity;
        }

    }

    let entries = Object.entries(obj);

    for (let element of entries) {
        console.log(`${element[0]} -> ${element[1]}`);
    }


}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
