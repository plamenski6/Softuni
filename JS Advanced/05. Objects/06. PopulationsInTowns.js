function solve(input) {

    let obj = {};

    for (let i of input) {
        let [town, population] = i.split(" <-> ");

        if (!obj.hasOwnProperty(town)) {
            obj[town] = Number(population);
        } else {
            obj[town] += Number(population);
        }
    }

    for (let i in obj) {
        console.log(`${i} : ${obj[i]}`);
    }

}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
