function solve(input) {

    let obj = {};

    for (let element of input) {
        let [company, id] = element.split(" -> ");

        if (!obj.hasOwnProperty(company)) {
            obj[company] = [];
        }

        if (!obj[company].includes(id)) {
            obj[company].push(id);
        }
    }

    Object.keys(obj).sort((a, b) => a.localeCompare(b))
        .forEach((company) => {
            console.log(company);
            console.log(`-- ${obj[company].join("\n-- ")}`);
        })

}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);
