function solve(arr) {

    let employees = [];

    for (let person of arr) {
        let personObj = {};
        personObj.name = person;
        personObj.personalNumber = person.length;
        employees.push(personObj);
    }

    for (let emp of employees) {
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNumber}`)
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
