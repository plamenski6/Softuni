function solve(input) {

    let obj = {};
    let br = {};

    for (let i of input) {
        let [juicy, quantity] = i.split(" => ");

        if (!obj.hasOwnProperty(juicy)) {
            obj[juicy] = Number(quantity);
        } else {
            obj[juicy] += Number(quantity);
        }

        let bottles = Math.floor(obj[juicy] / 1000);
        if (bottles > 0) {
            br[juicy] = bottles;
        }
    }

    let arr = Object.entries(br);
    for (let j of arr) {
        console.log(`${j[0]} => ${j[1]}`);
    }

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
